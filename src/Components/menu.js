import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Button} from 'react-bootstrap';
import {Link} from "react-router-dom";
import Background from '../Images/indian.png';
import Header from "./header";

var sectionStyle = {
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
                    <Link to={"/breakfast"}>
                        <Button variant="outline-light" style={{width: "30%", height: '100%', borderLeftStyle: 'none', borderTopStyle: 'none', borderRadius: '0px'}}>
                            <text style={{ fontWeight: '600', fontSize: '45px'}}>WINES</text>
                        </Button>
                    </Link>
                    <Link to={"/breakfast"}>
                        <Button variant="outline-light" style={{width: "30%", height: '100%', borderRightStyle: 'none', borderTopStyle: 'none', borderRadius: '0px'}}>
                            <text style={{ fontWeight: '600', fontSize: '45px'}}>DRINKS</text>
                        </Button>
                    </Link>
                </div>
                <div style={{alignContent: 'centre', paddingLeft: '10%', paddingTop: '5%', height: "25%"}}>
                    <Link to={"/breakfast"}>
                        <Button variant="outline-light" style={{width: "30%", height: '100%', borderLeftStyle: 'none', borderTopStyle: 'none', borderRadius: '0px'}}>
                            <text style={{ fontWeight: '600', fontSize: '45px'}}>BREAKFAST</text>
                        </Button>
                    </Link>
                    <Link to={"/breakfast"}>
                        <Button variant="outline-light" style={{width: "30%", height: '100%', borderRightStyle: 'none', borderTopStyle: 'none', borderRadius: '0px'}}>
                            <text style={{ fontWeight: '600', fontSize: '45px'}}>LUNCH</text>
                        </Button>
                    </Link>
                    <Link to={"/breakfast"}>
                        <Button variant="outline-light" style={{width: "30%", height: '100%', borderRightStyle: 'none', borderTopStyle: 'none', borderRadius: '0px'}}>
                            <text style={{ fontWeight: '600', fontSize: '45px'}}>DINNER</text>
                        </Button>
                    </Link>
                </div>
            </section>
        )
    }
}

export default withRouter(Menu)