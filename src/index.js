/**
 * External dependencies.
 */

/**
 * WordPress dependencies.
 */
const { wp } = window
const { __ } = wp.i18n
const { Fragment } = wp.element
const { PluginSidebarMoreMenuItem, PluginSidebar } = wp.editPost
const { registerPlugin } = wp.plugins

/**
 * Sidebar component voor the gutenberg editor.
 */
function Sidebara() {
    return (
        <Fragment>
            <PluginSidebarMoreMenuItem
                target="metatags-sidebar"
                icon="editor-customchar"
            >
                {__('MetaTags', 'metatags')}
            </PluginSidebarMoreMenuItem>

            <PluginSidebar
                name="metatags-sidebar"
                title={__('MetaTags', 'metatags')}
            >
                <div className="metabox-sidebar-content">
                    <h3>Metatags</h3>
                </div>
            </PluginSidebar>
        </Fragment>
    )
}

/**
 * Local dependencies.
 */

/**
 * Register the MetaTags plugin.
 */
registerPlugin('metatags', {
    icon: 'editor-customchar',
    render: Sidebara,
})
