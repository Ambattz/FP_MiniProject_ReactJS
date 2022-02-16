import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import AddPatient from "./AddPatient.jsx";
import { appDetailsData } from "./data";
import Button from '../components/Button';


class AllAppointments extends Component {
    constructor() {
        super();
        this.state = {
            appointmentsList: appDetailsData.getData() || {}
            //Write function to get the appointment details with the name as appointmentsList:
        };
        this.handleView = this.handleView.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleView(appId) {

        this.props.history.push(`/viewAppointment/${appId}`);
    }
    handleEdit(appId) {

        this.props.history.push(`/editAppointment/${appId}`);
    }
    handleDelete(appId) {
        appDetailsData.deleteAppointment(appId);
        this.setState({
            appointmentsList: appDetailsData.getData()
        });

    }
    appsList() {
        if (this.state.appointmentsList.length == 0)
            return <h1>No Appointments Found</h1>;
    }
    render() {
        const { appointmentsList } = this.state;

        return (
            <div style={{ height: "100%" }}>
                <NavBar />

                <form style={{ display: "flex", height: "100%", alignItems: "center" }}>
                    {appointmentsList.length === 0 ? (
                        <h1 style={{ textAlign: "center", flexGrow: "1" }}>
                            No Appoinments Found
                        </h1>
                    ) : (
                        <div style={{ height: "100%", width: "100%" }}>
                            <div>
                                <p
                                    style={{
                                        textAlign: "center",
                                        paddingBottom: "10px",
                                        paddingTop: "10px",
                                        fontSize: "2em",
                                        color: "Slate Blue"
                                    }}
                                >
                                    List of All Appointments
                                </p>
                            </div>
                            <div style={{ backgroundColor: 'rgb(191, 200, 212)', width: '100%', marginLeft: '0%' }} className="FormCenter">
                                {appointmentsList.map((appointment, index) => (
                                    <div className="FormField">
                                        {appointment.name},Slot:{appointment.slot}
                                        <Button className="FormField__all__Button" type="button" onClick={() => { this.handleDelete(appointment.appId) }}>Delete</Button>
                                        <Button className="FormField__all__Button" type="button" onClick={() => { this.handleEdit(appointment.appId) }}>Edit</Button>
                                        <Button className="FormField__all__Button" type="button" onClick={() => { this.handleView(appointment.appId) }}>View</Button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </form>
            </div>
        );
    }
}

export default AllAppointments;