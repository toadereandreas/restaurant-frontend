import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Button} from "react-bootstrap";

var upperButtonTextStyle = {
    fontWeight: '600',
    fontSize: '20px'
}

var upperButtonStyle = {
    width: '200px'
}

class Header extends Component {
    render() {
        return (
            <Navbar style={{backgroundColor: "transparent", top: "0%"}}>
                <Navbar.Brand href="/"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        <Nav.Link href="/menu" style={{ color: '#FFFFFF ', marginRight: '1em' }}>
                            <Button variant="outline-light" style={upperButtonStyle}>
                                <text style={upperButtonTextStyle}>MENU</text>
                            </Button>
                        </Nav.Link>
                        <Nav.Link href="/reservations" style={{ color: '#FFFFFF ', marginRight: '1em' }}>
                            <Button variant="outline-light" style={upperButtonStyle}>
                                <text style={upperButtonTextStyle}>RESERVATIONS</text>
                            </Button>
                        </Nav.Link>
                        <Nav.Link href="/location" style={{ color: '#FFFFFF ', marginRight: '1em' }}>
                            <Button variant="outline-light" style={upperButtonStyle}>
                                <text style={upperButtonTextStyle}>LOCATION</text>
                            </Button>
                        </Nav.Link>
                        <Nav.Link href="/reviews" style={{ color: '#FFFFFF ', marginRight: '1em' }}>
                            <Button variant="outline-light" style={upperButtonStyle}>
                                <text style={upperButtonTextStyle}>REVIEWS</text>
                            </Button>
                        </Nav.Link>
                        <Nav.Link href="/about" style={{ color: '#FFFFFF ' }}>
                            <Button variant="outline-light" style={upperButtonStyle}>
                                <text style={upperButtonTextStyle}>ABOUT US</text>
                            </Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Header)