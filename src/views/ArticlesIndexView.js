import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "../utils/api";
import { ArticlesFilters } from "../components/ArticlesFilters/ArticlesFilters";
import { ArticlesList } from "../components/ArticlesList/ArticlesList";
import { ShowMoreBtn } from "../components/ShowMoreBtn/ShowMoreBtn";
import { setArticlesList, incrementPageNr } from "../store/actions";

export const ArticlesIndexView = () => {
  const dispatch = useDispatch();
  const pageNr = useSelector(state => state.pageNr);
  const topicFilter = useSelector(state => state.filters.topic);
  const sortByFilter = useSelector(state => state.filters.sortBy);
  const timeFilter = useSelector(state => state.filters.time);

  useEffect(() => {
    fetchArticles(pageNr, topicFilter, sortByFilter, timeFilter)
      .then((res) => {
        console.log(res.data.articles);
        dispatch(setArticlesList(res.data.articles));
      });
  }, [pageNr, topicFilter, sortByFilter, timeFilter]);

  return (<>
    <h1>Articles</h1>
    <ArticlesFilters/>
    <ArticlesList/>
    <ShowMoreBtn/>
  </>);
};
