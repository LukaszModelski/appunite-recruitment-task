import {
  APPEND_ARTICLES_LIST,
  RESET_ARTICLES_LIST,
  INCREMENT_PAGE_NR,
  RESET_PAGE_NR,
  SET_FILTER_VALUE
} from "./actions";
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
    case APPEND_ARTICLES_LIST:
      return {
        ...state,
        articles: [...state.articles, ...action.articlesList]
      }
    case RESET_ARTICLES_LIST:
      return {
        ...state,
        articles: []
      }
    case INCREMENT_PAGE_NR:
      return {
        ...state,
        pageNr: state.pageNr + 1
      }
    case RESET_PAGE_NR:
      return {
        ...state,
        pageNr: 1
      }
    case SET_FILTER_VALUE:
      return {
        ...state,
        filters: {
          ...state.filters,
          [action.filterType]: action.filterValue
        }
      }
    default:
      return state;
  }
}
