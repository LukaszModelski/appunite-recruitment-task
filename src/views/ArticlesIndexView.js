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

  useEffect(() => {

    fetchArticles(pageNr, 'tech')
      .then((res) => {
        dispatch(setArticlesList(res.data.articles));
      });
  }, [pageNr]);

  return (<>
    <h1>Articles</h1>
    <ArticlesFilters/>
    <ArticlesList/>
    <ShowMoreBtn/>
  </>);
};
