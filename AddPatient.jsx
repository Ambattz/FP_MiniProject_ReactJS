import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";
import Button from '../components/Button';


class AddPatient extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            dob: "",
            location: "",
            mobile: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
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
        if (this.canBeSubmitted()) {

            alert("Patient Added successfully");
            patientDetailsData.add(
                this.state.name,
                this.state.email,
                this.state.dob,
                this.state.location,
                this.state.mobile
            );
            this.props.history.push("/allPatients");
        }
    }
    handleCancel(e) {
        e.preventDefault();
        this.props.history.push("/allPatients");
    }
    canBeSubmitted() {
        const { name, email, dob, location, mobile } = this.state;
        return (
            name.length > 0 &&
            email.length > 0 &&
            dob.length > 0 &&
            location.length > 0 &&
            mobile.length > 0
        );
    }

    render() {
        const isEnabled = this.canBeSubmitted();
        const name = this.state.name;
        const date = new Date();
        return (
            <div>
                <NavBar />
                <div>
                    <p
                        style={{
                            textAlign: "center",
                            paddingBottom: "10px",
                            paddingTop: "30px",
                            fontSize: "2em"
                        }}
                    >
                        Adding a Patient
                    </p>
                </div>
                {/* Write code here to create fields and input labels for name,email,dob,mobileno and location  */}
                <div className="FormCenter">
                    <form onSubmit={this.handleSubmit} className="FormFields">
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" for="name">Name</label>
                            <input
                                onChange={this.handleChange}
                                className="FormField__Input"
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter Full name">
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
                            <label className="FormField__ViewLabel" for="dob">Date of Birth</label>
                            <input
                                onChange={this.handleChange}
                                className="FormField__Input"
                                id="dob"
                                type="text"
                                name="dob"
                                placeholder="dd/mm/yyyy">
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
                                placeholder="Enter location">
                            </input>
                        </div>
                        <br></br>
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" for="mobile">Mobile No</label>
                            <input
                                onChange={this.handleChange}
                                className="FormField__Input"
                                id="mobile"
                                type="tel"
                                name="mobile"
                                placeholder="Enter Mobile">
                            </input>
                        </div>
                        <br></br>

                        <div className="SideRow">
                            <Button className="FormField__Button" type="submit">Register</Button>
                        </div>
                        <div className="SideRow">
                            <Button className="FormField__Button" type="button" onClick={this.handleCancel}>Cancel</Button>
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}

export default AddPatient;