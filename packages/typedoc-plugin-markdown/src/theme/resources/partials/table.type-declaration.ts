import { DeclarationReflection, SomeType } from 'typedoc';
import { MarkdownThemeRenderContext } from '../..';
import { table } from '../markdown';
import { formatTableDescriptionCol, formatTableNameCol } from '../utils';

export function typeDeclarationTable(
  context: MarkdownThemeRenderContext,
  props: DeclarationReflection[],
): string {
  const headers: string[] = [];

  const declarations = context.helpers.flattenDeclarations(props, true);

  const hasComments = declarations.some((declaration) =>
    Boolean(declaration.comment),
  );

  headers.push(context.text.getText('label.member'));

  headers.push(context.text.getText('label.type'));

  if (hasComments) {
    headers.push(context.text.getText('label.description'));
  }

  const rows: string[][] = [];

  declarations.forEach((declaration: DeclarationReflection, index: number) => {
    const row: string[] = [];

    row.push(formatTableNameCol(declaration.name));

    row.push(
      context.partials
        .someType(declaration.type as SomeType)
        .replace(/\n/g, ' '),
    );

    if (hasComments) {
      const comments = declaration.comment;

      if (comments) {
        row.push(formatTableDescriptionCol(context.partials.comment(comments)));
      } else {
        row.push('-');
      }
    }

    rows.push(row);
  });

  return table(headers, rows);
}
