import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom'

import pic from "../Images/food1.jpg";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Button} from 'react-bootstrap';

import Background from '../Images/food1.jpg';

var sectionStyle = {
    width: "100%",
    height: "1000px",
    backgroundImage: `url(${Background})`
};

class Home extends Component {
    render() {
        return (<section style={ sectionStyle }>
            <Navbar style={{backgroundColor: "transparent", top: "0%"}}>
                <Navbar.Brand href="/"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        <Nav.Link href="/menu" style={{ fontWeight: 'bold', color: '#FFFFFF ', marginRight: '1em' }}><Button variant="outline-light" style={{width: "150px"}}>MENU</Button></Nav.Link>
                        <Nav.Link href="/reservations" style={{ fontWeight: 'bold', color: '#FFFFFF ', marginRight: '1em' }}><Button variant="outline-light" style={{width: "150px"}}>RESERVATIONS</Button></Nav.Link>
                        <Nav.Link href="/location" style={{ fontWeight: 'bold', color: '#FFFFFF ', marginRight: '1em' }}><Button variant="outline-light" style={{width: "150px"}}>LOCATION</Button></Nav.Link>
                        <Nav.Link href="/reviews" style={{ fontWeight: 'bold', color: '#FFFFFF ', marginRight: '1em' }}><Button variant="outline-light" style={{width: "150px"}}>REVIEWS</Button></Nav.Link>
                        <Nav.Link href="/about" className="nav_link" style={{ fontWeight: 'bold', color: '#FFFFFF ' }} variant="outline-dark"><Button variant="outline-light" style={{width: "150px"}}>ABOUT US</Button></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            </section>
        )
    }
}

export default withRouter(Home)