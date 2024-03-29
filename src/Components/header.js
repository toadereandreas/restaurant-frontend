import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {Button} from "react-bootstrap";
import cart from '../Images/cart.jpg';

const upperButtonTextStyle = {
    fontWeight: '700',
    fontSize: '25px'
};

const upperButtonStyle = {
    width: '200px'
};

class Header extends Component {
    render() {
        return (
            <Navbar style={{backgroundColor: "transparent", top: "0%"}}>
                <Navbar.Brand href="/"/>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Button href={"/cart"} style={{backgroundColor: "transparent", borderColor: "white"}}>
                    <img src={cart} style={{width: '50px', height: '42px'}}/></Button>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ml-auto">
                        <Nav.Link href="/menu" style={{ backgroundColor: localStorage.getItem("USER_COLOR"), marginRight: '1em', borderRadius: "10px" }}>
                            <Button variant="outline-light" style={upperButtonStyle}>
                                <text style={upperButtonTextStyle}>CULOAREA TA</text>
                            </Button>
                        </Nav.Link>
                        <Nav.Link href="/menu" style={{ color: '#FFFFFF ', marginRight: '1em' }}>
                            <Button variant="outline-light" style={upperButtonStyle}>
                                <text style={upperButtonTextStyle}>MENIU</text>
                            </Button>
                        </Nav.Link>
                        <Nav.Link href="/reservations" style={{ color: '#FFFFFF ', marginRight: '1em' }}>
                            <Button variant="outline-light" style={upperButtonStyle}>
                                <text style={upperButtonTextStyle}>REZERVARI</text>
                            </Button>
                        </Nav.Link>
                        <Nav.Link href="/location" style={{ color: '#FFFFFF ', marginRight: '1em' }}>
                            <Button variant="outline-light" style={upperButtonStyle}>
                                <text style={upperButtonTextStyle}>LOCATIE</text>
                            </Button>
                        </Nav.Link>
                        {/*<Nav.Link href="/reviews" style={{ color: '#FFFFFF ', marginRight: '1em' }}>*/}
                        {/*    <Button variant="outline-light" style={upperButtonStyle}>*/}
                        {/*        <text style={upperButtonTextStyle}>REVIEWS</text>*/}
                        {/*    </Button>*/}
                        {/*</Nav.Link>*/}
                        <Nav.Link href="/about" style={{ color: '#FFFFFF '}}>
                            <Button variant="outline-light" style={upperButtonStyle}>
                                <text style={upperButtonTextStyle}>DESPRE NOI</text>
                            </Button>
                        </Nav.Link>
                        {/*<Nav.Link href="/cart" style={{ color: '#FFFFFF ', right: '10px' }}>*/}
                        {/*<Button variant="outline-light" style={upperButtonStyle}>*/}
                        {/*    <text style={upperButtonTextStyle}>BASKET</text>*/}
                        {/*</Button>*/}
                        {/*</Nav.Link>*/}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

        )
    }
}

export default withRouter(Header)