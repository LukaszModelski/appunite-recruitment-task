import React from "react";
import { useSelector } from "react-redux";
import uuid from 'react-uuid'
import { ArticlePreview } from "../ArticlePreview/ArticlePreview";

export const ArticlesList = () => {
  const articlesList = useSelector(state => state.articles);

  const renderArticlesList = (articlesList) => (
    articlesList.map((article, index) => (
      <ArticlePreview
        key={uuid()}
        index={index}
        img={article.urlToImage}
        title={article.title}
        description={article.description}
        date={article.publishedAt}
        author={article.author}
        sourceName={article.source.name}
        sourceUrl={article.url}
      />
    ))
  )

  return (<section className="articles-list">
    {articlesList.length > 0 && renderArticlesList(articlesList)}
  </section>);
};
