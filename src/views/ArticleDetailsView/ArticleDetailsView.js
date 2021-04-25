import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { ArticlePreview } from "../../components/ArticlePreview/ArticlePreview";
import { fetchArticleByTitle } from "../../utils/api";

export const ArticleDetailsView = props => {
  let articleFromStore = useSelector(state => state.articles[props.location.articleIndex]);
  let [article, setArticle] = useState(null);
  const { title } = useParams();

  useEffect(() => {
    if(!articleFromStore) {
      fetchArticleByTitle(title)
        .then(res => {
          setArticle(res.data.articles[0]);
        });
    } else {
      setArticle(articleFromStore);
    }
  }, []);

  return article
    ? <section className="article-details-view">
      <h1>{article.title}</h1>
      <Link className="article-details-view_go-back-link" to="/">Return to articles list</Link>
      <ArticlePreview 
        isDetailsPage
        img={article.urlToImage}
        title={article.title}
        description={article.content}
        date={article.publishedAt}
        author={article.author}
        sourceName={article.source.name}
        sourceUrl={article.url}
      />
    </section> 
  : <></>;
};
