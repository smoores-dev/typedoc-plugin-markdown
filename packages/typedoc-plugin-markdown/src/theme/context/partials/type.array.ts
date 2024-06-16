import { MarkdownThemeContext } from 'theme';
import { ArrayType } from 'typedoc';

export function arrayType(
  this: MarkdownThemeContext,
  model: ArrayType,
): string {
  const theType = this.partials.someType(model.elementType);
  return model.elementType.type === 'union' ? `(${theType})[]` : `${theType}[]`;
}
