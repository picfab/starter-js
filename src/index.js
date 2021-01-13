/**
 * WordPress dependencies.
 */

import { __ } from '@wordpress/i18n'
import { Fragment } from '@wordpress/element'
import { PluginSidebarMoreMenuItem, PluginSidebar } from '@wordpress/edit-post'
import { registerPlugin } from '@wordpress/plugins'
/**
 * Sidebar component voor the gutenberg editor.
 */
function Sidebar() {
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
    render: Sidebar,
})
