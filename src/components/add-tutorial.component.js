import React, { Component } from "react";
import TutorialDataService from "../services/tutorial.service";
import App1 from "../Afterlogin";
import { Switch, Route, Link } from "react-router-dom";


export default class AddTutorial extends Component {
  constructor(props) {
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.saveTutorial = this.saveTutorial.bind(this);
    this.newTutorial = this.newTutorial.bind(this);

    this.state = {
      id: null,
      email: "",
      password: "", 
      userid: "",

      submitted: false
    };
  }

  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  redirect(){
    
    var where={url: "../Afterlogin"};
    
  }
  saveTutorial() {
    var data = {
      title: this.state.title,
      description: this.state.description
    };

    TutorialDataService.create(data)
      .then(response => {
        this.setState({
          userid: response.data.userid,
          email: response.data.email,
          password: response.data.password,
          

          submitted: true
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  }

  newTutorial() {
    this.setState({
      id: null,
      email: "",
      password: "",
      userid: "",

      submitted: false
    });
  }

  render() {
    return (
      <div className="submit-form">
        {this.state.submitted ? (
          <div>
            <h4>You submitted successfully!</h4>
            <div>
              <h2> Services offered </h2>
              <ol>
                <li> USPS </li>
                <li> Fed Ex </li>
                <li> UPS </li>
            </ol>
                

        <nav className="navbar navbar-expand navbar-light ">
          
          <div className="navbar-nav mr-auto">
           
            <li className="nav-item">
              <Link to={"/after"} className="nav-link">
                Search For A Service
              </Link>
            </li>
          </div>
        </nav>
        </div>
          </div>
        ) : (
          <div>
            
            <div className="form-group">
              <label htmlFor="description">email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
                value={this.state.title}
                onChange={this.onChangeTitle}
                name="email"
              />
            </div>

            <div className="form-group">
              <label htmlFor="description">password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                required
                value={this.state.description}
                onChange={this.onChangeDescription}
                name="password"
              />
            </div>
            
            <button onClick={this.saveTutorial} className="btn btn-success">
              Login
            </button>
          </div>
        )}
      </div>
    );


  }
}

 