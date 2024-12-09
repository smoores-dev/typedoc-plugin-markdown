export default (navigation, basePath) => {
    return navigation?.map((navigationItem) => {
        return getNavigationItem(navigationItem, basePath);
    });
};
function getNavigationItem(navigationItem, basePath) {
    return {
        title: navigationItem.title,
        sidebarDepth: 0,
        path: navigationItem.path
            ? `/${basePath}/${getUrlKey(navigationItem.path)}`
            : null,
        children: navigationItem?.children?.map((groupChild) => {
            return getNavigationItem(groupChild, basePath);
        }),
    };
}
function getUrlKey(url) {
    return url.replace('.md', '');
}
