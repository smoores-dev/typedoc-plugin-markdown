import { ReflectionKind } from 'typedoc';
export function addTableOfContents(event, remarkPlugins, remarkPluginsNames, app) {
    const tocPluginIndex = remarkPluginsNames.findIndex((name) => name === 'remark-toc');
    const tocPlugin = remarkPlugins[tocPluginIndex];
    const options = Array.isArray(tocPlugin) ? tocPlugin[1] : {};
    const isModulesOnly = (event?.model).children?.every((child) => child.kind === ReflectionKind.Module);
    const outputFileStrategy = app.options.getValue('outputFileStrategy');
    const kindsWithToc = [
        ReflectionKind.Project,
        ReflectionKind.Module,
        ReflectionKind.Namespace,
        ReflectionKind.Class,
        ReflectionKind.Enum,
        ReflectionKind.Interface,
        ReflectionKind.Document,
    ];
    if (outputFileStrategy === 'modules') {
        kindsWithToc.push(ReflectionKind.Module);
    }
    if (!isModulesOnly) {
        kindsWithToc.push(ReflectionKind.Project);
    }
    if (kindsWithToc.includes(event.model?.kind)) {
        const contents = event.contents;
        const contentToLines = contents?.split('\n');
        const numberOfLinesStartingWithHash = contentToLines?.filter((line) => line.startsWith('## ')).length;
        if (numberOfLinesStartingWithHash > 1) {
            const firstHeadingIndex = contentToLines?.findIndex((line) => line.startsWith('## '));
            if (firstHeadingIndex && firstHeadingIndex > 0) {
                contentToLines?.splice(firstHeadingIndex, 0, `\n\n## ${options?.heading || 'Contents'}\n\n`);
                event.contents = contentToLines?.join('\n');
            }
        }
    }
}
