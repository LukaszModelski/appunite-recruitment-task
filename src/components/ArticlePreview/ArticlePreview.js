import React from "react";
import { Link } from "react-router-dom";
import { validateDateString, formatDate } from "../../utils/date";
import { formatAuthor } from "../../utils/utils";

export const ArticlePreview = props => {

  const imageStyles = {
    'backgroundImage': `url(${props.img})`
  }

  return (<div className="article-preview">
    <div className="article-preview_img" style={imageStyles}></div>
    <div className="article-preview_info">
      {validateDateString(props.date) && <span className="article-preview_date">{formatDate(props.date)}</span>}
      {props.author && <span className="article-preview_author">{formatAuthor(props.author)}</span>}
      <a
        href={props.sourceUrl}
        target="_blank"
        className="article-preview_source-link">
        {props.sourceName}
      </a>
    </div>
    <h2>{props.title}</h2>
    <p>{props.description}</p>
    <Link
      className="article-preview_read-more-btn"
      to="/article/123">
      Read More
    </Link>
  </div>);
};
