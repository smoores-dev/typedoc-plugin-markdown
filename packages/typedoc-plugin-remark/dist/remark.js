import * as path from 'path';
import { remark } from 'remark';
import { read, writeSync } from 'to-vfile';
export async function parseContents(filePath, remarkStringifyOptions = {}, userPlugins = []) {
    const file = await read(filePath);
    const processor = remark().data('settings', remarkStringifyOptions);
    const plugins = [
        './normalize-tables.mjs',
        ...userPlugins,
    ];
    const promises = plugins.map(async (plugin) => {
        return new Promise((resolve) => {
            const name = Array.isArray(plugin) ? plugin[0] : plugin;
            const isLocalPath = name !== './normalize-tables.mjs' &&
                /^\.{1,2}\/|^\//.test(name);
            const fullPath = isLocalPath
                ? path.resolve(process.cwd(), name)
                : name;
            const options = Array.isArray(plugin) ? plugin[1] : {};
            import(fullPath).then(({ default: pluginFn }) => {
                resolve({
                    pluginFn,
                    options,
                });
            });
        });
    });
    const pluginRefs = await Promise.all(promises);
    pluginRefs.forEach((pluginRef) => {
        processor.use(pluginRef.pluginFn, pluginRef.options);
    });
    await processor.process(file);
    writeSync(file);
}
