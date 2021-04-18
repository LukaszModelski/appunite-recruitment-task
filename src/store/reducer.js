import { SET_ARTICLES_LIST, INCREMENT_PAGE_NR, SET_FILTER_VALUE } from "./actions";
import { filters } from "../components/ArticlesFilters/filtersConfig";

const initialState = {
  articles: [],
  filters: {
    topic: filters.topic[0].searchParam,
    sortBy: false,
    time: false
  },
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
    case SET_FILTER_VALUE:
      return {
        ...state,
        pageNr: 1,
        articles: [],
        filters: {
          ...state.filters,
          [action.filter]: action.filterValue
        }
      }
    default:
      return state;
  }
}
