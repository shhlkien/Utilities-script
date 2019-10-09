#!/bin/bash

# while :; do
#   case $1 in
#     -h|--help)
#       echo "options:"
#       echo "-h, --help                			show help"
#       echo "[create|delete] [domain] [ip]		create or delete virtual host"
#       exit
#       ;;
#     *) ;;
#   esac
# done

action=$1
domain=$2
ip=$3
sitesEnabled='/etc/apache2/sites-enabled/'
sitesAvailable='/etc/apache2/sites-available/'
rootDir='/var/www/'$2
sitesAvailabledomain=$sitesAvailable$domain.conf

if [ "$action" != 'create' ] && [ "$action" != 'delete' ]; then
		echo $"ERROR: Unknown action"
		exit 1
fi

if [ "$domain" == "" ]; then
  echo $"ERROR: Missing domain name (e.g: domain.com)"
  exit 1
fi

if [ "$action" == 'create' ]; then

  ### check if domain already exists
	if [ -e $sitesAvailabledomain ]; then
		echo -e $"This domain already exists"
		exit
	else
		### check if directory exists or not
		if ! [ -d $rootDir ]; then
			mkdir $rootDir
			chown -R $USER:$USER $rootDir
			chmod -R 755 $rootDir

			### write test file in the new domain dir
			if ! echo "<?php echo $domain; ?>" > $rootDir/index.php
			then
				echo $"ERROR: Not able to write in file $rootDir/index.php. Please check permissions"
				exit 1
			fi

			### create virtual host rules file
			if ! echo "
			<VirtualHost $ip:80>
				ServerName $domain
				ServerAlias $domain
				DocumentRoot $rootDir
				LogLevel error
				ErrorLog /var/log/apache2/$domain-error.log
				CustomLog /var/log/apache2/$domain-access.log combined
			</VirtualHost>" > $sitesAvailabledomain
			then
				echo -e $"There is an ERROR creating $domain file"
				exit 1
			fi

			### Add domain in /etc/hosts
			if ! echo "$ip $domain" >> /etc/hosts
			then
				echo $"ERROR: Not able to write in /etc/hosts"
				exit 1
			fi

			### enable website
			a2ensite $domain

			### restart Apache
			service apache2 restart

			echo $"Done! Go to http://$domain"
		fi

	fi

else
	### check whether domain already exists
	if ! [ -e $sitesAvailabledomain ]; then
		echo -e $"This domain does not exist.\nDo nothing"
		exit
	else
		### Delete domain in /etc/hosts
		newhost=${domain//./\\.}
		sed -i "/$newhost/d" /etc/hosts

		### Delete virtual host rules files
		rm $sitesAvailabledomain

		### Delete root directory
		if [ -d $rootDir ]; then
			rm -rf $rootDir
		fi

		### disable website
		a2dissite $domain

		### restart Apache
		service apache2 restart

		echo $"Deleted host"
	fi

fi

exit