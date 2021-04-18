import { SET_ARTICLES_LIST, INCREMENT_PAGE_NR } from "./actions";

const initialState = {
  articles: [],
  filters: {},
  pageNr: 1
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ARTICLES_LIST:
      return {
        ...state,
        articles: [...state.articles, ...action.articlesList]
      }
    case INCREMENT_PAGE_NR:
      return {
        ...state,
        pageNr: state.pageNr + 1
      }
    default:
      return state;
  }
}
