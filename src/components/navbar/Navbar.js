import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {MainIcon} from '../icon/Icon'

export const MainNavbar = () => {

    return (
        <div className='contenierNav'>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <MainIcon style={{verticalAlign:"bottom"}}/>
                <Navbar.Brand href="inicio">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="investment">Investment</Nav.Link>
                        <NavDropdown title="Person" id="person">
                            <NavDropdown.Item href="#action/3.1">Investor</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Commercial</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Presenter</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">Configuration</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Log Out
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )

}