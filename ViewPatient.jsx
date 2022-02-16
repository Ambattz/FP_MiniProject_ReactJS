import React, { Component } from "react";
import NavBar from "./NavBar";
import { patientDetailsData } from "./data.js";
import Button from '../components/Button';

class ViewPatient extends Component {
    constructor(props) {
        super(props);
        this.state = {
            patient: patientDetailsData.viewPatientDetails(props.match.params.id)
        };

        this.handleClose = this.handleClose.bind(this);
    }

    handleClose(e) {
        this.props.history.push("/allPatients");
    }

    render() {
        const { patient } = this.state;
        if (!patient) {
            return <h1>No patients found</h1>
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
                        Viewing Patient
                    </p>
                </div>
                <div className="FormCenter">
                    <form onSubmit={this.handleSubmit} className="FormFields">
                        {/* Write code here to create fields for name, disease,appdate, slot and mobile*/}
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" id="name">Name - <span>  {patient.name}</span></label>
                        </div>
                        <br></br>
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" id="email">E-mail ID - <span>  {patient.email}</span></label>
                        </div>
                        <br></br>
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" id="dob">Date of Birth - <span>  {patient.dob}</span></label>
                        </div>
                        <br></br>
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" id="location">Location - <span>  {patient.location}</span></label>
                        </div>
                        <br></br>
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" id="mobile">Mobile No - <span>  {patient.mobile}</span></label>
                        </div>
                        <br></br>
                        <div className="FormField">
                            {/*Write code here to create close button */}
                            <Button className="FormField__Button" type="button" onClick={this.handleClose}>Close</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
export default ViewPatient;