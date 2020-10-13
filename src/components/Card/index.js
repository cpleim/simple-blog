import React from "react";
import { Link } from "react-router-dom";
import {APP_CONF} from "../../config/"

const Card = ({ article }) => {
  const imageUrl =
  APP_CONF.NODE_ENV !== "development"
      ? article.image.url
      : APP_CONF.REACT_APP_BACKEND_URL + article.image.url;
  return (
    <Link to={`/article/${article.id}`} className="uk-link-reset">
      <div className="uk-card uk-card-muted">
        <div className="uk-card-media-top">
          <img
            src={imageUrl}
            alt={article.image.url}
            height="100"
          />
        </div>
        <div className="uk-card-body">
          <p id="category" className="uk-text-uppercase">
            {article.category.name}
          </p>
          <p id="title" className="uk-text-large">
            {article.title}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;