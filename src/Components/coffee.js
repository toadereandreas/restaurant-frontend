import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Background from '../Images/coffee.jpeg';
import Header from "./header";

var sectionStyle = {
    width: "100%",
    height: "1080px",
    backgroundImage: `url(${Background})`
};

class Coffee extends Component {
    render() {
        return (
            <section style={sectionStyle}>
                <Header/>
            </section>
        )
    }
}

export default withRouter(Coffee)