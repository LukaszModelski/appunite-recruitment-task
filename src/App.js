import React from "react";
import { Switch, Route } from "react-router-dom";
import { ArticlesIndexView } from "./views/ArticlesIndexView/ArticlesIndexView";
import { ArticleDetailsView } from "./views/ArticleDetailsView/ArticleDetailsView";

export const App = () => {
  return (<>
    <header></header>
    <main className="container">
      <Switch>
        <Route exact path={'/'} component={ArticlesIndexView} />
        <Route path={'/article/:title'} component={ArticleDetailsView} />
      </Switch>
    </main>
    <footer></footer>
  </>);
};
