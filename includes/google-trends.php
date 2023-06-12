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
        add_action('admin_enqueue_scripts', [$this, 'load_custom_wp_admin_style']);
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
        wp_enqueue_style('style', plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'css/style.css');
        wp_enqueue_style('style-new', plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'css/style_new.css');
        //Loading google trends result js
        wp_enqueue_script('google-trends-js', 'https://ssl.gstatic.com/trends_nrtr/2431_RC04/embed_loader.js');
        wp_enqueue_script('google-trends-js-2', plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'js/google-trends.js');
    }

    /**
     * register_meta_boxes
     */
    public function register_meta_boxes()
    {
        //add add_meta_box
        add_meta_box(
            $this->slug,
            'Google Trends WP',
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
?>
        <!-- The Plusgin container start here -->
        <div class="holder">
            <!-- The Title container start here -->
            <div class="holder2" style="">
                <div class="selectpart">
                    <div class="dropdowncode">
                        <p onclick="myFunctioncode()" class="dropbtncode" id="codenewvalue" title="Select Country">Select
                            Country</p>
                        <div id="myDropdowncode" class="dropdown-contentcode">
                            <!-- Option for United State -->
                            <a href="javascript:void(0)" onclick="US()">
                                <p onclick="US()"><img class="flagn" onclick="US()" src="<?php echo plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'img/us.png'; ?>" height="20">
                                    <p class="countryn" onclick="US()">United State</p>
                                </p>
                            </a>
                            <!-- Option for Nigeria -->
                            <a href="javascript:void(0)" onclick="NG()">
                                <p onclick="NG()"><img class="flagn" onclick="NG()" src="<?php echo plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'img/ng.png'; ?>" height="20">
                                    <p class="countryn" onclick="NG()">Nigeria</p>
                                </p>
                            </a>
                            <!-- Option for Australia -->
                            <a href="javascript:void(0)" onclick="AU()">
                                <p onclick="AU()"><img class="flagn" onclick="AU()" src="<?php echo plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'img/au.jpg'; ?>" height="20">
                                    <p class="countryn" onclick="AU()">Australia</p>
                                </p>
                            </a>
                            <!-- Option for Canada -->
                            <a href="javascript:void(0)" onclick="CA()">
                                <p onclick="CA()"><img class="flagn" onclick="CA()" src="<?php echo plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'img/ca.jpg'; ?>" height="20">
                                    <p class="countryn" onclick="CA()">Canada</p>
                                </p>
                            </a>
                            <!-- Option for United Kingdom -->
                            <a href="javascript:void(0)" onclick="GB()">
                                <p onclick="GB()"><img class="flagn" onclick="GB()" src="<?php echo plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'img/uk.jpg'; ?>" height="20">
                                    <p class="countryn" onclick="GB()">United Kingdom</p>
                                </p>
                            </a>
                            <!-- Option for South Africa -->
                            <a href="javascript:void(0)" onclick="ZA()">
                                <p onclick="ZA()"><img class="flagn" onclick="ZA()" src="<?php echo plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'img/south.jpg'; ?>" height="20">
                                    <p class="countryn" onclick="ZA()">South Africa</p>
                                </p>
                            </a>
                            <!-- Option for Argetina -->
                            <a href="javascript:void(0)" onclick="AR()">
                                <p onclick="AR()"><img class="flagn" onclick="AR()" src="<?php echo plugin_dir_url(CODEDEYO_TRENDS_PLGUN_FILE) . 'img/ar.gif'; ?>" height="20">
                                    <p class="countryn" onclick="AR()">Argentina</p>
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="deyotitle">Google daily trending searches <br><small class="copyrightcode">Developed by <a href="https://www.adeleyeayodeji.com/" target="_blank" class="mainright">Adeleye Ayodeji</a></small>
                </div>
            </div>
            <!-- The Title container ends here -->

            <!-- The Trends result generated by google container start here -->
            <script type="text/javascript">
                trends.embed.renderWidget("dailytrends", "", {
                    "geo": "NG",
                    "guestPath": "https://trends.google.com:443/trends/embed/"
                });
            </script>
            <!-- The Trends result generated by google container start here -->
        </div>
        <!-- The Plusgin container ends here -->

        <!-- Thanks guys for using my plugin. Happy Coding@! -->
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
