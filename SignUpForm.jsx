import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";
import { adminDetailsData } from "./data.js";
import Button from '../components/Button';

import "../App.css";
class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      uname: "",
      email: "",
      password: "",
      dob: "",
      mobileno: "",
      location: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {

    e.preventDefault();

    if (this.canBeSubmitted()) {
      adminDetailsData.add(
        this.state.uname,
        this.state.email,
        this.state.password,
        this.state.dob,
        this.state.mobileno,
        this.state.location
      );
      this.setState({ name: e.target.value });
      this.props.history.push("/sign-in");
    }
  }
  canBeSubmitted() {
    const {
      uname,
      email,
      password,
      dob,
      mobileno,
      location

    } = this.state;
    return (
      uname.length > 4 &&
      email.length > 4 &&
      password.length > 4 &&
      dob.length > 4 &&
      mobileno.length > 4 &&
      location.length > 4

    );
  }

  render() {
    return (
      <div>
        <div>
          <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
            Digital Medical Record Database
          </h3>
        </div>
        <div className="FormCenter">
          <div className="FormTitle">
            <NavLink to="/sign-in" className="FormTitle__Link">
              Login
            </NavLink>{" "}
            or
            <NavLink exact to="/" className="FormTitle__Link">
              Register
            </NavLink>
          </div>

          <form onSubmit={this.handleSubmit} className="FormFields">
            {/*Write code here to create uname, email, dob, location, mobileno labels and inputs */}
            <div class="FormField__Label">
              <label className="FormField__ViewLabel" for="uname">Username</label>
              <input
                onChange={this.handleChange}
                className="FormField__Input"
                id="uname"
                type="text"
                name="uname"
                placeholder="Enter your username">
              </input>
            </div>
            <br></br>
            <div class="FormField__Label">
              <label className="FormField__ViewLabel" for="email">E-mail ID</label>
              <input
                onChange={this.handleChange}
                className="FormField__Input"
                id="email"
                type="email"
                name="email"
                placeholder="Enter email">
              </input>
            </div>
            <br></br>
            <div class="FormField__Label">
              <label className="FormField__ViewLabel" for="password">Password</label>
              <input
                onChange={this.handleChange}
                className="FormField__Input"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password">
              </input>
            </div>
            <br></br>
            <div class="FormField__Label">
              <label className="FormField__ViewLabel" for="dob">Date of Birth</label>
              <input
                onChange={this.handleChange}
                className="FormField__Input"
                id="dob"
                type="text"
                name="dob"
                placeholder="Enter date in format of dd/mm/yyyy">
              </input>
            </div>
            <br></br>
            <div class="FormField__Label">
              <label className="FormField__ViewLabel" for="mobileno">Mobile No</label>
              <input
                onChange={this.handleChange}
                className="FormField__Input"
                id="mobileno"
                type="tel"
                name="mobileno"
                placeholder="Enter Mobile Number">
              </input>
            </div>
            <br></br>
            <div class="FormField__Label">
              <label className="FormField__ViewLabel" for="location">Location</label>
              <input
                onChange={this.handleChange}
                className="FormField__Input"
                id="location"
                type="text"
                name="location"
                placeholder="Please enter the location">
              </input>
            </div>
            <br></br>
            <div className="FormField">
              {/* Write code here to create Register Button */}
              <Button className="FormField__Button" type="submit">Register</Button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUpForm;