import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchArticles } from "../utils/api";
import { ArticlesFilters } from "../components/ArticlesFilters/ArticlesFilters";
import { ArticlesList } from "../components/ArticlesList/ArticlesList";
import { setArticlesList } from "../store/actions";

export const ArticlesIndexView = () => {
  const dispatch = useDispatch();

  useEffect(() => {

    fetchArticles(1, 'tech')
      .then((res) => {
        dispatch(setArticlesList(res.data.articles));
      });
  }, []);

  return (<>
    <h1>Articles</h1>
    <ArticlesFilters/>
    <ArticlesList/>
  </>);
};
