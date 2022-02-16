import React, { Component } from "react";
import "../App.css";
import NavBar from "./NavBar.jsx";
import { patientDetailsData } from "./data.js";
import { Route } from "react-router-dom";
import Button from '../components/Button';


class EditPatient extends Component {
    constructor(props) {
        super(props);
        const patient = patientDetailsData.getPatientDetails(props.match.params.id) || undefined;
        this.state = {
            name: patient.name || "",
            email: patient.email || "",
            dob: patient.dob || "",
            location: patient.location || "",
            mobile: patient.mobile || "",
            patient: patient
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit(e) {

        if (this.canBeSubmitted()) {

            e.preventDefault();

            patientDetailsData.edit(
                this.state.patient.id,
                this.state.name,
                this.state.email,
                this.state.dob,
                this.state.location,
                this.state.mobile
            );

            this.props.history.push("/allPatients");
        }
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
    handleCancel(e) {

        this.props.history.push("/allPatients");
    }
    handleChange(e) {
        let target = e.target;
        let value = target.type === "checkbox" ? target.checked : target.value;
        let name = target.name;

        this.setState({
            [name]: value
        });
    }
    render() {
        const { patient } = this.state;
        if (!patient) {
            return (<div>Patient doesnot exist</div>)
        }


        return (
            <div>
                <NavBar />
                <div>
                    <p
                        style={{
                            textAlign: "center",
                            paddingBottom: "10px",
                            paddingTop: "10px",
                            fontSize: "2em"
                        }}
                    >
                        Edit patient
                    </p>
                </div>
                <div className="FormCenter">

                    <form onSubmit={this.handleSubmit} className="FormFields">
                        {/* Write code here to create labels and input fields for edit patient like name,email,dob,location and mobile*/}
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
                            <Button className="FormField__Button" type="submit">Submit</Button>
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

export default EditPatient;