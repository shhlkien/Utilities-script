<?php

echo "<pre style='background: #000000e8; color: wheat; padding: 1em;'>";
echo '<style>.collapse{cursor:pointer;transform:rotate(90deg);display:inline-block}.collapse.toggle{transform:rotate(0)}.hidden{display:none}</style>';
dump([]);
echo "<script> document.querySelectorAll('.collapse').forEach (function(el) {el.onclick = function() {this.classList.toggle('toggle'); this.nextElementSibling.classList.toggle('hidden'); } }); </script>";
die;

function dump($args, $indent = '  ', $hasChild = true) {

	if ( is_array($args) || is_object($args) ) {

		foreach ($args as $k => $v) {

			if ( is_array($v) || is_object($v) ) {

				printf("<div><span class='collapse'>&#9654;</span>%s[%s] => (%s) [\n", $hasChild ? $indent : '', $k, gettype($v));
				printf('<div>');
				dump($v, sprintf('%s  ', $indent, false));
				printf('</div>');
				printf("%s]</div>", $indent);
			}
			else {
				printf("<p>%s[%s] => %s (%s)</p>", $hasChild ? $indent : '', $k, $v, gettype($v));
			}
		}
	}
}
