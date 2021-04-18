// Action types
export const SET_ARTICLES_LIST = 'SET_ARTICLES_LIST';

// Action creators
export const setArticlesList = (articlesList) => {
  return { type: SET_ARTICLES_LIST, articlesList };
}
