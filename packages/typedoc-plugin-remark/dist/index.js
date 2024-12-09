/**
 * The plugin entrypoint and bootstrapping of the plugin.
 *
 * @module
 */
import { MarkdownPageEvent } from 'typedoc-plugin-markdown';
import * as options from './options/declarations.js';
import { addTableOfContents } from './options/helpers.js';
import { parseContents } from './remark.js';
export function load(app) {
    Object.entries(options).forEach(([name, option]) => {
        app.options.addDeclaration({
            name,
            ...option,
        });
    });
    app.renderer.on(MarkdownPageEvent.END, (event) => {
        const remarkPlugins = app.options.getValue('remarkPlugins');
        const remarkPluginsNames = remarkPlugins.map((plugin) => Array.isArray(plugin) ? plugin[0] : plugin);
        if (remarkPluginsNames.includes('remark-toc')) {
            addTableOfContents(event, remarkPlugins, remarkPluginsNames, app);
        }
    });
    app.renderer.postRenderAsyncJobs.push(async (output) => {
        const remarkPlugins = app.options.getValue('remarkPlugins');
        if (output.urls?.length) {
            await Promise.all(output.urls?.map(async (urlMapping) => {
                const filePath = `${output.outputDirectory}/${urlMapping.url}`;
                const remarkStringifyOptions = app.options.getValue('remarkStringifyOptions');
                return await parseContents(filePath, remarkStringifyOptions, remarkPlugins);
            }));
            if (remarkPlugins.length) {
                app.logger.info(`Output parsed using remark plugin(s) [${remarkPlugins
                    .map((plugin) => `"${Array.isArray(plugin) ? plugin[0] : plugin}"`)
                    .join(', ')}]`);
            }
        }
    });
}
