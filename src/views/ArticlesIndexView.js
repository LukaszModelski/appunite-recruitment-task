import React, { useEffect } from "react";
import { fetchArticles } from "../utils/api";
import { ArticlesFilters } from "../components/ArticlesFilters/ArticlesFilters";
import { ArticlesList } from "../components/ArticlesList/ArticlesList";

export const ArticlesIndexView = () => {

  useEffect(() => {
    fetchArticles(1, 'tech')
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (<>
    <h1>Articles</h1>
    <ArticlesFilters/>
    <ArticlesList/>
  </>);
};
