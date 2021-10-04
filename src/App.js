import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import PasswordReset from "./components/password_reset.component";
import Registration from "./components/registration.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/tutorials" className="navbar-brand">
            Bloomington Dispatch
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/registration"} className="nav-link">
                Registration
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/reset"} className="nav-link">
                Password Reset
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
            <Route exact path="/reset" component={PasswordReset} />
            <Route exact path="/add" component={AddTutorial} />
            <Route exact path="/registration" component={Registration} />
            <Route path="/tutorials/:id" component={Tutorial} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;