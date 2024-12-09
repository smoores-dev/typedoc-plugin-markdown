import { spawnSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { getPluginOptions } from '../options/options.js';
import { presets } from '../options/presets.js';
export default async function pluginDocusaurus(context, opts) {
    await generateTypedoc(context, opts);
    return {
        name: 'docusaurus-plugin-typedoc',
        extendCli(cli) {
            cli
                .command('generate-typedoc')
                .description(`[docusaurus-plugin-typedoc] Generate TypeDoc docs independently of the Docusaurus build process.`)
                .action(async () => {
                context.siteConfig?.plugins.forEach((pluginConfig) => {
                    // Check PluginConfig is typed to [string, PluginOptions]
                    if (pluginConfig && typeof pluginConfig[1] === 'object') {
                        generateTypedoc(context, pluginConfig[1]);
                    }
                });
            });
        },
    };
}
/**
 * Initiates a new typedoc Application bootstrapped with plugin options
 */
async function generateTypedoc(context, opts) {
    // create outDir if it doesn't exist
    const outputDir = path.join(context?.siteDir, presets.out);
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }
    const { plugin, ...options } = getPluginOptions(context, opts);
    // spawn typedoc process and pass docusaurus.config options as a string
    spawnSync('typedoc', [
        ...plugin.flatMap((plugin) => ['--plugin', plugin]),
        '--docusaurusConfigOptions',
        `${JSON.stringify(options)}`,
    ], {
        stdio: 'inherit',
    });
}
