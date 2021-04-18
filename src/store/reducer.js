import { SET_ARTICLES_LIST } from "./actions";

const initialState = {
  articles: [],
  filters: {}
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case SET_ARTICLES_LIST:
      return {
        ...state,
        articles: action.articlesList
      }
    default:
      return state;
  }
}
