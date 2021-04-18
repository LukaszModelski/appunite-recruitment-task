import React from "react";
import { Switch, Route } from "react-router-dom";
import { ArticlesIndexView } from "./views/ArticlesIndexView";
import { ArticleDetailsView } from "./views/ArticleDetailsView";

export const App = () => {
  return (<>
    <header></header>
    <main className="container">
      <Switch>
        <Route exact path={'/'}><ArticlesIndexView/></Route>
        <Route path={'/article/:id'}><ArticleDetailsView/></Route>
      </Switch>
    </main>
    <footer></footer>
  </>);
};
