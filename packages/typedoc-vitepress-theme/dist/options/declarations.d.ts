import { ParameterType } from 'typedoc';
/**
 *
 * If TypeDoc is run from outside of the VitePress project root directory, then `docsRoot` should be set to the path of the VitePress root directory.
 *
 * e.g. the following file structure:
 *
 * ```
 *   ├── package.json
 *   ├── typedoc.json
 *   └── docs/
 *       └── .vitepress/
 *       └── typedoc-api/
 *           └── index.md
 * ```
 *
 * Requires the following config:
 *
 * ```json filename="typedoc.json"
 * {
 *    "out": "./docs/typedoc-api",
 *    "docsRoot": "./docs",
 * }
 * ```
 */
export declare const docsRoot: {
    help: string;
    type: ParameterType;
    defaultValue: string;
};
/**
 * **sidebar.autoConfiguration**
 *
 * Set to `false` to disable sidebar generation. Defaults to true.
 *
 * **sidebar.format**
 *
 * Enables backward compatibility with VuePress. Available options [`"vitepress"`, `"vuepress1"`, `"vuepress2"`]. Defaults to `"vitepress"`.
 *
 * **sidebar.collapsed**
 *
 * Determines if sidebar items with children are open or closed. Set `collapsed` to `false` to set sidebar items as open by default.
 *
 * https://vitepress.dev/reference/default-theme-sidebar#collapsible-sidebar-groups
 *
 * **sidebar.pretty**
 *
 * Pretty format the sidebar JSON.
 *
 */
export declare const sidebar: {
    help: string;
    type: ParameterType;
    defaultValue: import("../types/options.js").Sidebar;
};
