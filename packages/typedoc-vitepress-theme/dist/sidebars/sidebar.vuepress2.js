export default (navigation, basePath) => {
    return navigation.map((navigationItem) => {
        return getNavigationItem(navigationItem, basePath);
    });
};
function getNavigationItem(navigationItem, basePath) {
    return {
        text: navigationItem.title,
        link: navigationItem.path ? `/${basePath}/${navigationItem.path}` : null,
        collapsible: true,
        children: navigationItem?.children?.map((group) => {
            return getNavigationItem(group, basePath);
        }),
    };
}
