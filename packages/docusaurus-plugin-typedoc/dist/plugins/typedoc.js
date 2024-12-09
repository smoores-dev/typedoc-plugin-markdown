import * as fs from 'fs';
import * as path from 'path';
import * as options from '../options/declarations.js';
import { adjustBaseDirectory } from '../utils/adjust-basedir.js';
import { getSidebar } from '../utils/get-sidebar.js';
export function load(app) {
    Object.entries(options).forEach(([name, option]) => {
        app.options.addDeclaration({
            name,
            ...option,
        });
    });
    app.options.addReader(new (class {
        name = 'docusaurus-options';
        order = 100;
        supportsPackages = false;
        read(container) {
            const presets = JSON.parse(container.getValue('docusaurusConfigOptions'));
            const ignoreKeys = [
                'id',
                'siteDir',
                'docsPresetPath',
                'numberPrefixParser',
            ];
            Object.entries(presets)
                .filter(([key]) => !ignoreKeys.includes(key))
                .forEach(([key, value]) => {
                container.setValue(key, value);
            });
        }
    })());
    app.renderer.postRenderAsyncJobs.push(async (output) => {
        const outputDir = app.options.getValue('out');
        const docusaurusConfigOptions = JSON.parse(app.options.getValue('docusaurusConfigOptions'));
        const sidebar = app.options.getValue('sidebar');
        const siteDir = docusaurusConfigOptions.siteDir;
        const docsPresetPath = docusaurusConfigOptions.docsPresetPath;
        const numberPrefixParser = docusaurusConfigOptions.numberPrefixParser;
        if (sidebar?.autoConfiguration && output.navigation) {
            const sidebarPath = path.resolve(outputDir, 'typedoc-sidebar.cjs');
            let baseDir = path
                .relative(siteDir, outputDir)
                .split(path.sep)
                .slice(1)
                .join('/');
            if (docsPresetPath) {
                baseDir = adjustBaseDirectory(baseDir, docsPresetPath);
            }
            const sidebarJson = getSidebar(output.navigation, baseDir, numberPrefixParser);
            fs.writeFileSync(sidebarPath, `// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = { items: ${JSON.stringify(sidebarJson, null, sidebar.pretty ? 2 : 0)}};
module.exports = typedocSidebar.items;`);
        }
    });
}
