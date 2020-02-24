import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";

const ProductsPage = props => {
  console.log(props);
  return `hello from products page ${props.match.params.id}`;
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
            <a href="/product/1">Product 1</a>
          </li>
          <li>
            <a href="/product/2">Product 2</a>
          </li>
          <li>
            <a href="/product/3">Product 3</a>
          </li>
        </ul>
      </aside>
      <article className="App-content">
        <Router>
          <Switch>
            <Route path="/product/:id" component={ProductsPage} />
            <Route path="/" exact component={HomePage} />
          </Switch>
        </Router>
      </article>
    </div>
  );
};

export default App;
