import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import AddTutorial from "./add-tutorial.component";
import PasswordReset from "./password_reset.component";
import Registration from "./registration.component";
import Tutorial from "./tutorial.component";
import TutorialsList from "./tutorials-list.component";
import servicesoffered from "./servicesoffered.component";
import Search from './Search.component';
import initialDetails from './initialDetails.component';
import Card from './card.component';
import Scroll from './Scroll.component';


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
          return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={initialDetails}/>
    </div>
  );
          <div className="container mt-3">
            <Switch>
              <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
              <Route exact path="/reset" component={PasswordReset} />
              <Route exact path="/add" component={AddTutorial} />
              <Route exact path="/registration" component={Registration} />
              <Route path="/tutorials/:userid" component={Tutorial} />
            </Switch>
          </div>
        </div>
      );
    }
  }
  
  export default App;
