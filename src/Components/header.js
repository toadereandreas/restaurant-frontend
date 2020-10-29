import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends Component {
    render() {

        //const token = localStorage.getItem('AUTH_TOKEN')
        //const role = localStorage.getItem('PERMISSION')
        return (
            <Navbar style={{backgroundColor: "#FFEDDA"}}>
                <Navbar.Brand href="/"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        <Nav.Link href="/menu" style={{ fontWeight: 'bold', color: '#000080 ', marginRight: '1em' }}>MENU</Nav.Link>
                        <Nav.Link href="/reservations" style={{ fontWeight: 'bold', color: '#000080 ', marginRight: '1em' }}>RESERVATIONS</Nav.Link>
                        <Nav.Link href="/location" style={{ fontWeight: 'bold', color: '#000080 ', marginRight: '1em' }}>LOCATION</Nav.Link>
                        <Nav.Link href="/reviews" style={{ fontWeight: 'bold', color: '#000080 ', marginRight: '1em' }}>REVIEWS</Nav.Link>
                        <Nav.Link href="/about" className="nav_link" style={{ fontWeight: 'bold', color: '#000080 ' }} onClick>ABOUT US</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Header)