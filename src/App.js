import React from "react";
import { Switch, Route } from "react-router-dom";
import { ArticlesIndexView } from "./views/articles-index-view";
import { ArticleDetailsView } from "./views/article-details-view";

export const App = () => {
  return (<>
    <header></header>
    <main>
      <Switch>
        <Route exact path={'/'}><ArticlesIndexView/></Route>
        <Route path={'/article/:id'}><ArticleDetailsView/></Route>
      </Switch>
    </main>
    <footer></footer>
  </>);
};
