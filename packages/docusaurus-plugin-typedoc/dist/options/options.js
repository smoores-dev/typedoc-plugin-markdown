import { presets } from './presets.js';
export const DEFAULT_SIDEBAR_OPTIONS = {
    autoConfiguration: true,
    pretty: false,
};
const DEFAULT_PLUGIN_OPTIONS = {
    ...presets,
    id: 'default',
    sidebar: {
        ...DEFAULT_SIDEBAR_OPTIONS,
    },
};
export function getPluginOptions(context, opts) {
    const docsPreset = context.siteConfig?.presets?.find((preset) => Boolean(preset[1]?.docs));
    const options = {
        ...DEFAULT_PLUGIN_OPTIONS,
        siteDir: context.siteDir,
        docsPresetPath: docsPreset ? docsPreset[1]?.docs?.path : null,
        numberPrefixParser: docsPreset
            ? docsPreset[1]?.docs?.numberPrefixParser
            : null,
        ...opts,
        sidebar: {
            ...DEFAULT_PLUGIN_OPTIONS.sidebar,
            ...opts.sidebar,
        },
        plugin: [
            ...new Set([
                ...['typedoc-plugin-markdown', 'docusaurus-plugin-typedoc/typedoc'],
                ...(opts.plugin || []),
            ]),
        ],
    };
    return options;
}
