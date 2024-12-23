import { backTicks, htmlTable, table } from '../../../libs/markdown/index.js';
import { escapeChars } from '../../../libs/utils/index.js';
import { TypeDeclarationVisibility } from '../../../options/maps.js';
import { ReflectionKind, ReflectionType } from 'typedoc';
export function typeDeclarationTable(model, options) {
    const tableColumnsOptions = this.options.getValue('tableColumnSettings');
    const leftAlignHeadings = tableColumnsOptions.leftAlignHeaders;
    const isCompact = this.options.getValue('typeDeclarationVisibility') ===
        TypeDeclarationVisibility.Compact;
    const hasSources = !tableColumnsOptions.hideSources &&
        !this.options.getValue('disableSources');
    const headers = [];
    const declarations = isCompact
        ? model
        : this.helpers.getFlattenedDeclarations(model, {
            includeSignatures: true,
        });
    const hasDefaultValues = declarations.some((declaration) => Boolean(declaration.defaultValue) && declaration.defaultValue !== '...');
    const hasComments = declarations.some((declaration) => Boolean(declaration.comment));
    headers.push(this.i18n.theme_name());
    headers.push(this.i18n.theme_type());
    if (hasDefaultValues) {
        headers.push(this.i18n.theme_default_value());
    }
    if (hasComments) {
        headers.push(this.i18n.theme_description());
    }
    if (hasSources) {
        headers.push(this.i18n.theme_defined_in());
    }
    const rows = [];
    declarations.forEach((declaration) => {
        const row = [];
        const nameColumn = [];
        if (this.options.getValue('useHTMLAnchors') && declaration.anchor) {
            nameColumn.push(`<a id="${declaration.anchor}"></a>`);
        }
        const name = [declaration.name];
        if (declaration.signatures?.length) {
            name.push('()');
        }
        const optional = declaration.flags.isOptional ? '?' : '';
        nameColumn.push(`${backTicks(name.join(''))}${optional}`);
        row.push(nameColumn.join(' '));
        if (isCompact && declaration.type instanceof ReflectionType) {
            row.push(this.partials.reflectionType(declaration.type, {
                forceCollapse: isCompact,
            }));
        }
        else {
            row.push(this.partials.someType(declaration.type));
        }
        if (hasDefaultValues) {
            row.push(escapeChars(!declaration.defaultValue || declaration.defaultValue === '...'
                ? '-'
                : declaration.defaultValue));
        }
        if (hasComments) {
            const comments = declaration.comment;
            if (comments) {
                row.push(this.partials.comment(comments, { isTableColumn: true }));
            }
            else {
                row.push('-');
            }
        }
        if (hasSources) {
            row.push(this.partials.sources(declaration, { headingLevel: -1 }));
        }
        rows.push(row);
    });
    const shouldDisplayHtmlTable = () => {
        if (options?.kind &&
            [ReflectionKind.Variable, ReflectionKind.TypeAlias].includes(options?.kind) &&
            this.options.getValue('typeDeclarationFormat') == 'htmlTable') {
            return true;
        }
        if (options?.kind === ReflectionKind.Property &&
            this.options.getValue('propertyMembersFormat') == 'htmlTable') {
            return true;
        }
        return false;
    };
    return shouldDisplayHtmlTable()
        ? htmlTable(headers, rows, leftAlignHeadings)
        : table(headers, rows, leftAlignHeadings);
}
