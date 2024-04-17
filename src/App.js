import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import HomeScreen from "./HomeScreen";
import SearchPage from "./SearchPage/SearchPage";
import SearchResult from "./SearchResult/SearchResult";
import Articles from "./Articles/Articles";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <HomeScreen />
          </Route>
          <Route exact path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/result/:type/:link">
            <SearchResult />
          </Route>
          <Route exact path="/articles">
            <Articles />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
