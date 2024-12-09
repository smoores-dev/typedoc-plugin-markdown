import { heading } from '../../../libs/markdown/index.js';
import { ReflectionKind, } from 'typedoc';
export function reflectionIndex(model, options) {
    const md = [];
    if (model.categories) {
        model.categories.forEach((categoryGroup) => {
            md.push(heading(options.headingLevel, categoryGroup.title) + '\n');
            if (categoryGroup.description) {
                md.push(this.helpers.getCommentParts(categoryGroup.description) + '\n');
            }
            md.push(this.helpers.getGroupIndex(categoryGroup) + '\n');
        });
    }
    else {
        const groups = model.groups?.filter((group) => group.allChildrenHaveOwnDocument() &&
            group.title !== ReflectionKind.pluralString(ReflectionKind.Document));
        groups?.forEach((reflectionGroup) => {
            if (reflectionGroup.categories) {
                md.push(heading(options.headingLevel, reflectionGroup.title) + '\n');
                reflectionGroup.categories.forEach((categoryGroup) => {
                    md.push(heading(options.headingLevel + 1, categoryGroup.title) + '\n');
                    if (categoryGroup.description) {
                        md.push(this.helpers.getCommentParts(categoryGroup.description) + '\n');
                    }
                    md.push(this.helpers.getGroupIndex(categoryGroup) + '\n');
                });
            }
            else {
                md.push(heading(options.headingLevel, reflectionGroup.title) + '\n');
                md.push(this.helpers.getGroupIndex(reflectionGroup) + '\n');
            }
        });
    }
    return md.join('\n');
}
