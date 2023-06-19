<?php

namespace Codedeyo\GoogleTrends\Plugin;

//check for security
if (!defined('ABSPATH')) {
    exit('ABSPATH must be set before running');
}

class CodedeyoGoogleTrends
{
    private $slug;

    public function __construct()
    {
        $this->slug = "codedeyogoogletrends/meta-block";
        // Action for the above functions
        add_action('admin_enqueue_scripts', [$this, 'load_custom_wp_admin_style'], PHP_INT_MAX);
        //register meta box for gutenberg editor
        add_action('init', [$this, 'gutenbergMetabox']);
        //editor asset
        add_action('enqueue_block_editor_assets', array($this, 'enqueue_block_editor_assets'));
        //add_meta_boxes
        add_action('add_meta_boxes', [$this, 'register_meta_boxes']);
    }

    /**
     * load_custom_wp_admin_style
     */
    public function load_custom_wp_admin_style()
    {
        //Loading my personal styles
        wp_enqueue_style('style-frontend', plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'build/frontend.css', [], CODEDEYO_TRENDS_PLGUN_VERSION);
        //Loading google trends result js
        wp_enqueue_script('google-trends-js', 'https://ssl.gstatic.com/trends_nrtr/2431_RC04/embed_loader.js', [], null, true);
        //load chart js
        wp_enqueue_script('google-trends-js-chart', 'https://ssl.gstatic.com/trends_nrtr/3349_RC01/embed_loader.js', [], null, true);
        wp_enqueue_script('google-trends-js-2', plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'build/frontend.js', array('wp-element'), CODEDEYO_TRENDS_PLGUN_VERSION);
        //localize script
        wp_localize_script('google-trends-js-2', 'codedeyoGoogleTrends', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('codedeyo-google-trends-nonce'),
            'plugin_dir_url' => plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE),
            'frontend_css_url' => plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'build/frontend.css'
        ));
    }

    /**
     * register_meta_boxes
     */
    public function register_meta_boxes()
    {
        //add add_meta_box
        add_meta_box(
            $this->slug,
            'Google Trends for WP',
            [$this, 'metabox_render'],
            null,
            'normal',
            'high',
            array(
                // '__block_editor_compatible_meta_box' => false,
            )
        );
    }

    /**
     * metabox_render
     * @param $post
     */
    public function metabox_render($post)
    {
        ob_start();
?>
        <div id='google-trends-wp-container'>
            Loading . . .
        </div>
        <?php
        echo ob_get_clean();
        ?>
<?php
    }

    /**
     * gutenbergMetabox
     */
    public function gutenbergMetabox()
    {
        register_post_meta('post', 'codedeyo_gutenberg_meta', array(
            'show_in_rest' => true,
            'single' => true,
            'type' => 'string',
        ));
    }

    /**
     * Editor asset
     */
    function enqueue_block_editor_assets()
    {

        wp_enqueue_script(
            $this->slug,
            plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'build/index.js',
            array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor')
        );

        wp_enqueue_style(
            $this->slug . '-editor',
            plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'build/style-index.css',
            array('wp-edit-blocks')
        );
    }
}

//init
new CodedeyoGoogleTrends();
