// Action types
export const SET_ARTICLES_LIST = 'SET_ARTICLES_LIST';
export const INCREMENT_PAGE_NR = 'INCREMENT_PAGE_NR';

// Action creators
export const setArticlesList = (articlesList) => {
  return { type: SET_ARTICLES_LIST, articlesList };
}

export const incrementPageNr = () => {
  return { type: INCREMENT_PAGE_NR };
}
