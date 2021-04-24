import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../utils/api";
import { ArticlesFilters } from "../components/ArticlesFilters/ArticlesFilters";
import { ArticlesList } from "../components/ArticlesList/ArticlesList";
import { ShowMoreBtn } from "../components/ShowMoreBtn/ShowMoreBtn";
import { appendArticlesList, resetArticlesList } from "../store/actions";

export const ArticlesIndexView = () => {
  const dispatch = useDispatch();
  const pageNr = useSelector(state => state.pageNr);
  const topicFilter = useSelector(state => state.filters.topic.searchParam);
  const sortByFilter = useSelector(state => state.filters.sortBy.searchParam);
  const timeFilter = useSelector(state => state.filters.time.searchParam);

  useEffect(() => {
    fetchArticles(pageNr, topicFilter, sortByFilter, timeFilter)
      .then((res) => {
        console.log(res.data.articles);
        if(pageNr === 1) {
          dispatch(resetArticlesList());
        }
        dispatch(appendArticlesList(res.data.articles));
      });
  }, [pageNr, topicFilter, sortByFilter, timeFilter]);

  return (<>
    <h1>Articles</h1>
    <ArticlesFilters/>
    <ArticlesList/>
    <ShowMoreBtn/>
  </>);
};
