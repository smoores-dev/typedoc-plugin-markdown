import { MarkdownThemeContext } from '@plugin/theme/index.js';
import { Comment } from 'typedoc';

export function getDescriptionForComment(
  this: MarkdownThemeContext,
  comment: Comment,
): string | null {
  if (comment?.summary?.length) {
    return this.helpers
      .getCommentParts(comment.summary)
      ?.split(/(\r?\n){2}/)[0]
      .replace(/\r?\n/g, ' ');
  }
  return null;
}
