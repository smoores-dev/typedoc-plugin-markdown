export function getSidebar(navigation, basePath, numberPrefixParser) {
    return navigation
        .map((navigationItem) => getNavigationItem(navigationItem, basePath, numberPrefixParser))
        .filter((navItem) => Boolean(navItem));
}
function getNavigationItem(navigationItem, basePath, numberPrefixParser) {
    const navigationItemPath = navigationItem.path || navigationItem.url;
    const parsedUrl = numberPrefixParser === false
        ? navigationItemPath
        : navigationItemPath?.replace(/\d+-/g, '');
    const getId = () => {
        const idParts = [];
        if (basePath.length > 0) {
            idParts.push(basePath);
        }
        if (parsedUrl) {
            idParts.push(parsedUrl.replace(/\\/g, '/'));
        }
        if (navigationItemPath) {
            return idParts.join('/').replace(/(.*)\.\w+$/, '$1');
        }
        return null;
    };
    const id = getId();
    if (navigationItem.children?.length) {
        return {
            type: 'category',
            label: `${navigationItem.title}`,
            items: getSidebar(navigationItem.children, basePath, numberPrefixParser),
            ...(id && {
                link: {
                    type: 'doc',
                    id,
                },
            }),
        };
    }
    return id
        ? {
            type: 'doc',
            id,
            label: `${navigationItem.title}`,
        }
        : null;
}
