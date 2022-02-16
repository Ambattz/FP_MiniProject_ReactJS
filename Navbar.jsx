import React, { useState } from "react";
import Medilogo from "../images/Medi-Logo.png";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from "reactstrap";
import { Link } from "react-router-dom";
import { NavLink as ReactLink } from "react-router-dom";

const Example = props => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            {/*should have a Navbar brand, toggler and the NavItem (logout) should be linked to sign-in page */}

            <Navbar style={{ backgroundColor: 'rgb(191, 200, 212)' }} light expand="md">
                <img src={Medilogo} alt="Logo" width="52" height="52" />
                <NavbarBrand> DMRD</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="ml-auto navbar-nav" navbar>
                        <NavItem >
                            <ReactLink to="/addPatient" className="nav-link" activeClassName="active" >Add Patient</ReactLink>
                        </NavItem>
                        <NavItem>
                            <ReactLink to="/allPatients" className="nav-link" activeClassName="active">All Patients</ReactLink>
                        </NavItem>
                        <NavItem>
                            <ReactLink to="/bookAppointment" className="nav-link" activeClassName="active">Book Appointment</ReactLink>
                        </NavItem>
                        <NavItem>
                            <ReactLink to="/allAppointments" className="nav-link" activeClassName="active">All Appointments</ReactLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                User
                            </DropdownToggle>
                            <DropdownMenu right className="DropDowns">
                                <DropdownItem className={"dropdDownItem"}>
                                    <Link to="/viewProfile">Veiw Profile</Link>
                                </DropdownItem>
                                <DropdownItem className={"dropdDownItem"}>
                                    <Link to="/sign-in">Logout</Link>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};
export default Example;
