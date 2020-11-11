import {BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";
import React from 'react';
import "./App.css";
import Protected from "./components/protected";
import Login from "./components/login";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/protected">Protected</Link>
            </li>
          </ul>
        </header>
        <Switch>
          <PrivateRoute exact path="/protected" component={Protected}></PrivateRoute>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
