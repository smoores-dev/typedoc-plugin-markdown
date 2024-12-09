/**
 * The plugin entrypoint and bootstrapping of the plugin.
 *
 * @module
 */
import * as fs from 'fs';
import { MarkdownPageEvent, } from 'typedoc-plugin-markdown';
import { DEFAULT_SIDEBAR_OPTIONS } from './options.js';
import * as options from './options/declarations.js';
import { presets } from './options/presets.js';
import { getSidebar } from './sidebar.js';
export function load(app) {
    Object.entries(options).forEach(([name, option]) => {
        app.options.addDeclaration({
            name,
            ...option,
        });
    });
    app.options.addReader(new (class {
        name = 'gitlab-wiki-options';
        order = 0;
        supportsPackages = false;
        read(container) {
            Object.entries(presets).forEach(([key, value]) => {
                container.setValue(key, value);
            });
        }
    })());
    app.renderer.on(MarkdownPageEvent.END, (page) => {
        page.contents = page.contents?.replace(/\[([^\]]+)\]\((?!https?:)([^)]+)\)/g, (match, text, url) => {
            let relativeUrl = url?.replace(/\.md/g, '');
            if (!relativeUrl.startsWith('.') && !relativeUrl.startsWith('/')) {
                relativeUrl = './' + relativeUrl;
            }
            return `[${text}](${encodeURI(relativeUrl)})`;
        });
    });
    app.renderer.postRenderAsyncJobs.push(async (output) => {
        const sidebarOptions = {
            ...DEFAULT_SIDEBAR_OPTIONS,
            ...app.options.getValue('sidebar'),
        };
        if (sidebarOptions.autoConfiguration && output.navigation) {
            const sidebarHeading = sidebarOptions.heading;
            const sidebarContent = getSidebar(output.navigation);
            if (sidebarContent.length) {
                fs.writeFileSync(`${output.outputDirectory}/_sidebar.md`, `## ${sidebarHeading}\n\n${formatContents(getSidebar(output.navigation))}`);
            }
        }
    });
}
function formatContents(contents) {
    return (contents.replace(/[\r\n]{3,}/g, '\n\n').replace(/^\s+|\s+$/g, '') + '\n');
}