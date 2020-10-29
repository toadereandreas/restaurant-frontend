import React, { Component } from 'react';
import { withRouter } from 'react-router';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

class Header extends Component {
    render() {

        // const token = localStorage.getItem('AUTH_TOKEN')
        //const role = localStorage.getItem('PERMISSION')
        return (
            <Navbar bg="light" className="App-header" expand="md" sticky="top">
                <Navbar.Brand href="/"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        <Nav.Link href="/login" style={{ fontWeight: 'bold', marginRight: '0.9em' }}>LOGIN</Nav.Link>
                        <Nav.Link href="/register" style={{ fontWeight: 'bold' }}>REGISTER</Nav.Link>
                        <Nav.Link href="/conferences" style={{ fontWeight: 'bold', color: '#414a4c', marginRight: '0.9em' }}>CONFERENCES</Nav.Link>
                        <Nav.Link href="/myPapers" style={{ fontWeight: 'bold', color: '#414a4c', marginRight: '0.9em' }}>MY PAPERS</Nav.Link>
                        <Nav.Link href="/myConferences" style={{ fontWeight: 'bold', color: '#414a4c', marginRight: '0.9em' }}>MY CONFERENCES</Nav.Link>
                        <Nav.Link href="/myReviews" style={{ fontWeight: 'bold', color: '#414a4c', marginRight: '0.9em' }}>TO REVIEW</Nav.Link>
                        <Nav.Link href="/about" style={{ fontWeight: 'bold', color: '#414a4c' }}>ABOUT</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

export default withRouter(Header)