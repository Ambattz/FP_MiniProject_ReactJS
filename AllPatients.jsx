import React, { Component } from "react";
import NavBar from "./NavBar.jsx";
import "../App.css";
import { patientDetailsData } from "./data.js";
import Button from '../components/Button';

class AllPatients extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patientsList: patientDetailsData.getData() || {}
            //Write function to get the data of patients with the name as appointmentsList:
        };
        this.handleView = this.handleView.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }
    handleView(id) {

        this.props.history.push(`/viewPatient/${id}`);
    }
    handleEdit(id) {

        this.props.history.push(`/editPatient/${id}`);
    }
    handleDelete(e) {

        patientDetailsData.deletePatient(e);
        this.setState({
            patientsList: patientDetailsData.getData(),
        })
    }

    render() {
        const { patientsList } = this.state;

        return (
            <div style={{ height: "100%" }}>
                <NavBar />
                <form style={{ display: "flex", height: "100%", alignItems: "center" }}>
                    {patientsList.length === 0 ? (
                        <h1 style={{ textAlign: "center", flexGrow: "1" }}>
                            No Patients Found
                        </h1>
                    ) : (
                        <div style={{ backgroundColor: 'rgb(191, 200, 212)', width: '100%', marginLeft: '0%' }} className="FormCenter">
                            {patientsList.map((patient) => (
                                <div className="FormField">
                                    {patient.name}
                                    <Button className="FormField__all__Button" type="button" onClick={() => { this.handleEdit(patient.id) }}>Edit</Button>
                                    <Button className="FormField__all__Button" type="button" onClick={() => { this.handleView(patient.id) }}>View</Button>
                                </div>
                            ))}
                        </div>
                    )}
                </form>
            </div>
        );
    }
}

export default AllPatients;