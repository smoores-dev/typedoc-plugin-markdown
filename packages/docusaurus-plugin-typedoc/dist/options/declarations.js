import { ParameterType } from 'typedoc';
import { DEFAULT_SIDEBAR_OPTIONS } from './options.js';
/**
 * Used internally to pass options from docusaurus.config to TypeDoc.
 *
 * @internal
 *
 * @hidden
 */
export const docusaurusConfigOptions = {
    help: 'docusaurus.config options - should not be used if running as a docusaurus plugin.',
    type: ParameterType.String,
    defaultValue: '{}',
};
/**
 * **sidebar.autoConfiguration**
 *
 * Set to `false` to disable sidebar generation. Defaults to `true`.
 *
 * **sidebar.pretty**
 *
 * Pretty format the sidebar JSON.
 *
 * Please see the [sidebar guide](https:/typedoc-plugin-markdown.org/plugins/docusaurus/sidebar) for additional information on sidebar setup.
 *
 */
export const sidebar = {
    help: 'Configures the autogenerated Docusaurus sidebar.',
    type: ParameterType.Mixed,
    defaultValue: DEFAULT_SIDEBAR_OPTIONS,
};
