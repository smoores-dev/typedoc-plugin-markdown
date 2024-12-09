export function unionType(model) {
    const useCodeBlocks = this.options.getValue('useCodeBlocks');
    const shouldFormat = useCodeBlocks && model.types.length > 4;
    const md = model.types
        .map((unionType) => this.partials.someType(unionType, { forceCollapse: true }))
        .join(shouldFormat ? `\n  \\| ` : ` \\| `);
    return shouldFormat ? `\n  \\| ` + md : md;
}
