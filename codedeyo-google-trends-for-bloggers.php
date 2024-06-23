<?php
/*
Plugin Name: Google Trends for WP
Plugin URI: https://wordpress.org/plugins/codedeyo-google-trends-for-bloggers/
Version: 3.2.6
Description: A cool plugin that shows trending searches below your editor.
Author: Adeleye Ayodeji
Author URI: http://adeleyeayodeji.com/
Text Domain: codedeyo-google-trends-for-bloggers
Domain Path: /languages
*/

// add basic plugin security.
defined('ABSPATH') || exit;

if (!defined('CODEDEYO_TRENDS_PLGUN_FILE')) {
    define('CODEDEYO_TRENDS_PLGUN_FILE', __FILE__);
}
//define version
define('CODEDEYO_TRENDS_PLGUN_VERSION', time());

//require once included file
require_once plugin_dir_path(CODEDEYO_TRENDS_PLGUN_FILE) . '/includes/google-trends.php';
