<?php

namespace Codedeyo\GoogleTrends\Plugin;

//check for security
if (!defined('ABSPATH')) {
    exit('ABSPATH must be set before running');
}

/**
 * CodedeyoGoogleTrends
 * @return void
 * @since 1.0.0
 * @author Adeleye Ayodeji adeleyeayodeji.com
 */
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
        //add ajax update_default_country
        add_action('wp_ajax_update_default_country_codedeyo_googletrend', [$this, 'update_default_country']);
        add_action('wp_ajax_nopriv_update_default_country_codedeyo_googletrend', [$this, 'update_default_country']);
    }

    /**
     * google_permission_callback
     * @return bool
     */
    public function google_permission_callback()
    {
        //check if user is logged and has admin capabilities
        return current_user_can('edit_posts');
    }

    /**
     * load_custom_wp_admin_style
     * @return void
     */
    public function load_custom_wp_admin_style()
    {
        //Loading my personal styles
        wp_enqueue_style('style-frontend', plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'build/frontend.css', [], CODEDEYO_TRENDS_PLGUN_VERSION);
        //Loading google trends result js
        wp_enqueue_script('google-trends-js', 'https://ssl.gstatic.com/trends_nrtr/2431_RC04/embed_loader.js', [], null, true);
        //load chart js
        wp_enqueue_script('google-trends-js-chart', 'https://ssl.gstatic.com/trends_nrtr/3349_RC01/embed_loader.js', [], null, true);
        wp_enqueue_script('google-trends-js-2', plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'build/frontend.js', array('wp-element', 'wp-components'), CODEDEYO_TRENDS_PLGUN_VERSION);
        //localize script
        wp_localize_script('google-trends-js-2', 'codedeyoGoogleTrends', array(
            'ajax_url' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('codedeyo-google-trends-nonce'),
            'plugin_dir_url' => plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE),
            'default_country' => get_option('codedeyo_google_trends_default_country', 'NG')
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
            'post',
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

        /**
         * Enqueue Gutenberg block assets for backend editor.
         */
        wp_enqueue_script(
            $this->slug,
            plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'build/index.js',
            array('wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor')
        );

        /**
         * Enqueue Gutenberg block assets for backend editor.
         */
        wp_enqueue_style(
            $this->slug . '-editor',
            plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'build/style-index.css',
            array('wp-edit-blocks')
        );
    }

    /**
     * update_default_country ajax
     */
    public function update_default_country()
    {
        //get country code
        $country_code = sanitize_text_field($_POST['country']);
        //nonce
        $nonce = sanitize_text_field($_POST['nonce']);
        //verify nonce
        if (!wp_verify_nonce($nonce, 'codedeyo-google-trends-nonce')) {
            return wp_send_json(
                array(
                    'success' => false,
                    'message' => 'Nonce verification failed'
                )
            );
        }
        //update option
        update_option('codedeyo_google_trends_default_country', $country_code);
        //return response
        return wp_send_json(
            array(
                'success' => true,
                'message' => 'Default country updated successfully',
                'data' => $country_code
            )
        );
    }
}

/**
 * Init Core Class
 * @return void
 */
new CodedeyoGoogleTrends();
