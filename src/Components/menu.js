import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Background from '../Images/indian.png';
import Header from "./header";

const sectionStyle = {
    width: "100%",
    height: "1080px",
    backgroundImage: `url(${Background})`
};

class Menu extends Component {
    render() {
        return (
            <section style={ sectionStyle }>
                <Header/>
                <div style={{alignContent: 'centre', paddingLeft: '25%', paddingTop: '5%', height: "25%"}}>
                    <Link to={"/wines"}>
                        <Button variant="outline-light" style={{width: "30%", height: '100%', borderLeftStyle: 'none', borderTopStyle: 'none', borderRadius: '0px'}}>
                            <text style={{ fontWeight: '600', fontSize: '45px', fontFamily: 'Brush Script MT'}}>VINURI</text>
                        </Button>
                    </Link>
                    <Link to={"/drinks"}>
                        <Button variant="outline-light" style={{width: "30%", height: '100%', borderRightStyle: 'none', borderTopStyle: 'none', borderRadius: '0px'}}>
                            <text style={{ fontWeight: '600', fontSize: '45px', fontFamily: 'Brush Script MT'}}>RACORITOARE</text>
                        </Button>
                    </Link>
                </div>
                <div style={{alignContent: 'centre', paddingLeft: '10%',  height: "25%"}}>
                    <Link to={"/breakfast"}>
                        <Button variant="outline-light" style={{width: "30%", height: '100%', borderLeftStyle: 'none', borderBottomStyle: 'none', borderRadius: '0px'}}>
                            <text style={{ fontWeight: '600', fontSize: '45px'}}>BREAKFAST</text>
                        </Button>
                    </Link>
                    <Link to={"/lunch"}>
                        <Button variant="outline-light" style={{width: "30%", height: '100%', borderRightStyle: 'none', borderTopStyle: 'none', borderBottomStyle: 'none', borderRadius: '0px'}}>
                            <text style={{ fontWeight: '600', fontSize: '45px', fontFamily: 'Luminari'}}>PRANZ</text>
                        </Button>
                    </Link>
                    <Link to={"/dinner"}>
                        <Button variant="outline-light" style={{width: "30%", height: '100%', borderRightStyle: 'none', borderTopStyle: 'none', borderRadius: '0px'}}>
                            <text style={{ fontWeight: '600', fontSize: '45px', fontFamily: 'Trattatello'}}>CINA</text>
                        </Button>
                    </Link>
                </div>
                <div style={{alignContent: 'centre', paddingLeft: '25%', height: "25%"}}>
                    <Link to={"/coffee"}>
                        <Button variant="outline-light" style={{width: "30%", height: '100%', borderLeftStyle: 'none', borderBottomStyle: 'none', borderRadius: '0px'}}>
                            <text style={{ fontWeight: '600', fontSize: '45px', fontFamily: "Apple Chancery"}}>CAFEA</text>
                        </Button>
                    </Link>
                    <Link to={"/desserts"}>
                        <Button variant="outline-light" style={{width: "30%", height: '100%', borderRightStyle: 'none', borderBottomStyle: 'none', borderRadius: '0px'}}>
                            <text style={{ fontWeight: '600', fontSize: '45px', fontFamily: "Brush Script MT"}}>DESERT</text>
                        </Button>
                    </Link>
                </div>
            </section>
        )
    }
}

export default withRouter(Menu)