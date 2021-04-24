// Action types
export const APPEND_ARTICLES_LIST = 'APPEND_ARTICLES_LIST';
export const RESET_ARTICLES_LIST = 'RESET_ARTICLES_LIST';
export const INCREMENT_PAGE_NR = 'INCREMENT_PAGE_NR';
export const RESET_PAGE_NR = 'RESET_PAGE_NR';
export const SET_FILTER_VALUE = 'SET_FILTER_VALUE';

// Action creators
export const appendArticlesList = articlesList => ({ type: APPEND_ARTICLES_LIST, articlesList });

export const resetArticlesList = () => ({ type: RESET_ARTICLES_LIST });

export const incrementPageNr = () => ({ type: INCREMENT_PAGE_NR });

export const resetPageNr = () => ({ type: RESET_PAGE_NR });

export const setFilterValue = (filterType, filterValue) => ({ type: SET_FILTER_VALUE, filterType, filterValue });