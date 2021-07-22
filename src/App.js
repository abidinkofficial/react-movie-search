import React from "react"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from "./pages/Home"
import Movie from "./pages/Movie"

const App = () => {
  return (
    <div className="font-sans antialiased text-gray-500">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/movie/:id">
            <Movie />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
