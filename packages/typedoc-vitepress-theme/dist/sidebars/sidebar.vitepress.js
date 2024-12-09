import * as path from 'path';
export default (navigation, basePath, options) => {
    return navigation.map((navigationItem) => {
        return getNavigationItem(navigationItem, basePath, options);
    });
};
function getNavigationItem(navigationItem, basePath, options) {
    const hasChildren = navigationItem?.children?.length;
    const linkParts = [];
    if (navigationItem?.path) {
        if (basePath.length) {
            linkParts.push(basePath);
        }
        linkParts.push(getParsedUrl(navigationItem.path).replace(/\\/g, '/'));
    }
    return {
        text: navigationItem.title,
        ...(linkParts.length && {
            link: `/${linkParts.join('/')}`,
        }),
        ...(hasChildren && { collapsed: options.collapsed }),
        ...(hasChildren && {
            items: navigationItem.children?.map((group) => getNavigationItem(group, basePath, options)),
        }),
    };
}
function getParsedUrl(url) {
    if (path.basename(url) === 'index.md') {
        return path.dirname(url) + '/';
    }
    return url;
}
