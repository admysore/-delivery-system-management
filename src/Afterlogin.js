import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AddTutorial from "./components/add-tutorial.component";
import PasswordReset from "./components/password_reset.component";
import Registration from "./components/registration.component";
import Tutorial from "./components/tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import servicesoffered from "./components/servicesoffered.component";
import Search from './components/Search.component';
import initialDetails from './components/initialDetails.component';
import Card from './components/card.component';
import Scroll from './components/Scroll.component';


class App1 extends Component {
  render() {
    return (
      <div>
        
        <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={initialDetails}/>
    </div>
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

export default App1;