const filterSearch = ({router, page, sort, search}) => {
    const path = router.pathname;
    const query = router.query;
    if(page) query.page = page;
    if(search) query.search = search;
    if(sort) query.sort = sort;

    router.push({
        pathname: path,
        query: query
    })
}
export default filterSearch