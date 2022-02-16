import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import { appDetailsData } from "./data.js"
import Button from '../components/Button';

import "../App.css";

class EditAppointment extends Component {
    constructor(props) {
        super(props);
        const appointment = appDetailsData.getAppointmentDetails(props.match.params.appId) || undefined;
        this.state = {
            name: appointment.name || "",
            disease: appointment.disease || "",
            appdate: appointment.appdate || "",
            slot: appointment.slot || "",
            description: appointment.description || "",
            appointment: appointment
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    handleSubmit(e) {

        console.log("Details", this.state.appointment.appId,
            this.state.name,
            this.state.disease,
            this.state.appdate,
            this.state.slot,
            this.state.description)
        if (true) {
            e.preventDefault();

            appDetailsData.edit(
                this.state.appointment.appId,
                this.state.name,
                this.state.disease,
                this.state.appdate,
                this.state.slot,
                this.state.description
            );
            this.props.history.push("/allAppointments");
        }
    }

    canBeSubmitted() {
        const { name, disease, appdate, slot, description } = this.state;
        return (
            name.length > 0 &&
            disease.length > 0 &&
            appdate.length > 0 &&
            slot.length > 0 &&
            description.length > 0
        );
    }
    handleCancel(e) {
        this.props.history.push("/allAppointments");
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
        const { appointment } = this.state;

        if (!appointment) {
            return (<h1>No appointments Found</h1>);
        }
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
                        Edit Appointment
                    </p>
                </div>
                <div className="FormCenter">
                    <form onSubmit={this.handleSubmit} className="FormFields">
                        {/*it should have fields like name, disease, appdate, slot, description, submit and cancel buttons */}
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" for="name">Name of the patient</label>
                            <input
                                onChange={this.handleChange}
                                className="FormField__Input"
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter name">
                            </input>
                        </div>
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" for="disease">Disease</label>
                            <input
                                onChange={this.handleChange}
                                className="FormField__Input"
                                id="disease"
                                type="text"
                                name="disease"
                                placeholder="Enter location">
                            </input>
                        </div>
                        <br></br>
                        <br></br>
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" for="appdate">Date</label>
                            <input
                                onChange={this.handleChange}
                                className="FormField__Input"
                                id="appdate"
                                type="text"
                                name="appdate"
                                placeholder="dd/mm/yyyy">
                            </input>
                        </div>
                        <br></br>
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" for="slot">Date</label>
                            <input
                                onChange={this.handleChange}
                                className="FormField__Input"
                                id="slot"
                                type="text"
                                name="slot"
                                placeholder="Enter Slot">
                            </input>
                        </div>
                        <br></br>
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" for="description">Description</label>
                            <input
                                onChange={this.handleChange}
                                className="FormField__Input"
                                id="description"
                                type="text"
                                name="description"
                                placeholder="Enter description">
                            </input>
                        </div>
                        <br></br>
                        <div className="SideRow">
                            <Button className="FormField__Button" type="submit">Book Now</Button>
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

export default EditAppointment;