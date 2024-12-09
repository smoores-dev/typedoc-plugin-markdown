import { FrontmatterNamingConvention } from './options/maps.js';
export function getResolvedTags(app, comment) {
    if (!comment)
        return {};
    const frontmatterTags = app.options.getValue('frontmatterCommentTags');
    const namingConvention = app.options.getValue('frontmatterNamingConvention');
    const preserveFrontmatterCommentTags = app.options.getValue('preserveFrontmatterCommentTags');
    const resolvedFrontmatterTags = comment
        ? getFrontmatterTags(comment, frontmatterTags, namingConvention)
        : {};
    if (Object.keys(resolvedFrontmatterTags)?.length &&
        !preserveFrontmatterCommentTags) {
        Object.keys(resolvedFrontmatterTags).forEach((tag) => {
            comment?.removeTags(`@${tag}`);
        });
    }
    return resolvedFrontmatterTags;
}
export function getFrontmatterTags(comment, frontmatterTags, namingConvention) {
    if (comment.blockTags?.length) {
        const tags = comment.blockTags
            .filter((tag) => frontmatterTags?.includes(getTagName(tag)))
            .reduce((prev, current) => {
            const tagName = getTagName(current);
            const tagValue = current.content
                .filter((commentPart) => commentPart.kind === 'text')
                .map((commentPart) => commentPart.text, false)
                .join('\n');
            return {
                ...prev,
                [toVariable(tagName, namingConvention)]: isNaN(Number(tagValue))
                    ? tagValue
                    : Number(tagValue),
            };
        }, {});
        return tags;
    }
    return {};
}
function getTagName(tag) {
    return tag.tag.substring(1);
}
function toVariable(key, namingConvention) {
    if (namingConvention === FrontmatterNamingConvention.SnakeCase) {
        return toSnakeCase(key);
    }
    return key;
}
function toSnakeCase(key) {
    return (key
        .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
        ?.map((s) => s.toLowerCase())
        .join('_') || '');
}
