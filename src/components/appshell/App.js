import React, { Suspense, useState, useEffect } from "react";
import * as reactLib from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

const MyComponent = React.lazy(() =>
  import(/* webpackIgnore:true */ "http://127.0.0.1:2222/build/index.js")
);

const ProductsPage = props => {
  useEffect(() => {
    window.react = reactLib;
    window.require = mod => window[mod];
  });
  return (
    <div id="products-page">
      <Suspense fallback={<div>Loading</div>}>
        <MyComponent count={25} />
      </Suspense>
    </div>
  );
};

const HomePage = props => {
  return "hello from home page";
};

const App = props => {
  return (
    <div className="App">
      <header className="App-header">This is the header</header>
      <aside className="App-sidebar">
        <ul>
          <li>
            <a href="/products">Products Page</a>
          </li>
        </ul>
      </aside>
      <article className="App-content">
        <Router>
          <Switch>
            <Route path="/products" component={ProductsPage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Router>
      </article>
    </div>
  );
};

export default App;
