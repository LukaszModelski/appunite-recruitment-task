import React from "react";
import { Link } from "react-router-dom";
import { validateDateString, formatDate } from "../../utils/date";
import { formatAuthor } from "../../utils/utils";

export const ArticlePreview = props => {
  console.log(props);

  const imageStyles = {
    'backgroundImage': `url(${props.img})`
  }

  return <div className={`article-preview ${props.isDetailsPage ? 'article-preview--details-page' : ''}`}>
    {props.isDetailsPage
      ? <img  className="article-preview_img" src={props.img} />
      : <div className="article-preview_img" style={imageStyles}></div>}
    <div className="article-preview_content">
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
      {props.isDetailsPage
        ? <a
          className="article-preview_source-btn"
          target="_blank"
          href={props.sourceUrl}>
          Go To Source
        </a>
        : <Link
          className="article-preview_read-more-btn"
          to={{ pathname: `/article/${encodeURI(props.title)}`, articleIndex: props.index}}>
          Read More
        </Link>}
    </div>
  </div>;
};
