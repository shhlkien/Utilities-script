#!/usr/bin/env bash

ACTION=$1
DOMAIN=$2
IP=$3

WWW_DIR='/var/www/'
SITE_AVAILABLE_DIR='/etc/nginx/sites-available/'
SITE_ENABLED_DIR='/etc/nginx/sites-enabled/'
LOG_DIR='/var/log/nginx/'
HOST_FILE='/etc/hosts'

SITE_DIR=$WWW_DIR$DOMAIN

function create {

  ok='y'

  if [[ -d $SITE_DIR ]]; then
    read -p "$DOMAIN already existed, continue? [y/n]? " ok
  fi

  if [[ $ok =~ ^[y|Y](es)?$ ]]; then

    # create directory for the site
    sudo mkdir -p $SITE_DIR
    sudo chmod -R 755 $SITE_DIR
    sudo chown -R $USER:$USER $SITE_DIR
    echo "<html>
        <head>
          <title>Welcome</title>
        </head>
        <body>
          <h1>Success! The $DOMAIN server block is working!</h1>
        </body>
    </html>" > $SITE_DIR/index.html

    # create site available and enable it
    echo "server {
  listen $IP:80;
  listen [::]:80;

  server_name $DOMAIN;

  root $SITE_DIR;
  index index.html;

  access_log $LOG_DIR$DOMAIN.access.log;
  error_log $LOG_DIR$DOMAIN.error.log;

  location / {
    try_files \$uri \$uri/ =404;
  }
}" | sudo tee $SITE_AVAILABLE_DIR$DOMAIN > /dev/null

    if ! [[ -e $SITE_ENABLED_DIR$DOMAIN ]]; then
      sudo ln -s $SITE_AVAILABLE_DIR$DOMAIN $SITE_ENABLED_DIR
    fi

    # add local address to host file
    echo "$IP $DOMAIN" | sudo tee -a $HOST_FILE > /dev/null

    sudo systemctl restart nginx

    echo 'Create site successfully'
    echo "Your site is available at http://$DOMAIN"
    exit
  fi
}

function delete {

  sudo sed -i "/$IP $DOMAIN/d" $HOST_FILE

  if [[ -d $SITE_DIR ]]; then
    sudo rm -rf $SITE_DIR
  fi

  if [[ -e $SITE_AVAILABLE_DIR$DOMAIN ]] && [[ -e $SITE_ENABLED_DIR$DOMAIN ]]; then
    sudo rm $SITE_AVAILABLE_DIR$DOMAIN $SITE_ENABLED_DIR$DOMAIN
  fi

  if ls $LOG_DIR$DOMAIN* 1> /dev/null 2>&1; then
    sudo rm $LOG_DIR$DOMAIN*
  fi

  sudo systemctl restart nginx

  echo 'Delete site successfully!'
  exit
}

case $ACTION in
create)
  create
;;
delete)
  delete
;;
--help|-h)
  echo "Usage: sudo <action> <domain> <ipv4>

create      create site corresponding to 'domain' and 'ipv4'
delete      delete site corresponding to 'domain' and 'ipv4'
-h, --help  display help for command"
  exit
;;
*)
  echo "ERROR: unkown action"
  exit 1
;;
esac
