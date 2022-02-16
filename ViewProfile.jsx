import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import NavBar from "./NavBar.jsx";
import { adminDetailsData } from "./data.js"
import "../App.css";
import Button from '../components/Button';

class ViewProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            admin: adminDetailsData.getCurrentUser() || {}
        };
        this.handleClose = this.handleClose.bind(this);
    }
    handleClose(e) {
        e.preventDefault();
        this.props.history.push("/allPatients");
    }

    render() {

        const { admin } = this.state;
        return (
            <div>
                <NavBar />
                <div>
                    <h3 style={{ textAlign: "center", paddingBottom: "10px" }}>
                        Here are your details
                    </h3>
                </div>

                <div className="FormCenter">
                    <form onSubmit={this.handleSubmit} className="FormFields">
                        {/*Write code to create labels for name,email,dob,mobileno and location */}
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" id="name">Username - <span>  {admin.name}</span></label>
                        </div>
                        <br></br>
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" id="email">E-mail - <span>  {admin.email}</span></label>
                        </div>
                        <br></br>
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" id="dob">DOB - <span>  {admin.dob}</span></label>
                        </div>
                        <br></br>
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" id="mobileno">Mobile No - <span>  {admin.mobileno}</span></label>
                        </div>
                        <br></br>
                        <div class="FormField__Label">
                            <label className="FormField__ViewLabel" id="location">Location - <span>  {admin.location}</span></label>
                        </div>
                        <br></br>
                        <div className="FormField">
                            {/*Write code here to create a close button */}
                            <Button className="FormField__Button" type="button" onClick={this.handleClose}>Close</Button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default ViewProfile;