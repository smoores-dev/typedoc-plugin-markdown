/**
 * Describes the options declared by the plugin.
 */
export interface PluginOptions {
    /**
     * An array of remark plugin names.
     */
    remarkPlugins: any;
    /**
     * Custom options for the remark-stringify plugin.
     */
    remarkStringifyOptions: any;
}
