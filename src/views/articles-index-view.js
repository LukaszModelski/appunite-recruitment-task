import React, { useEffect } from "react";
import { fetchArticles } from "../utils/api";

export const ArticlesIndexView = () => {

  useEffect(() => {
    fetchArticles(1, 'tech')
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (<>
    Article index view
  </>);
};
