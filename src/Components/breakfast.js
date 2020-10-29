import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Background from '../Images/breakfast.jpg';
import Header from "./header";

const sectionStyle = {
    width: "100%",
    height: "1080px",
    backgroundImage: `url(${Background})`
};

class Breakfast extends Component {
    render() {
        return (
            <section style={sectionStyle}>
                <Header/>
            </section>
        )
    }
}

export default withRouter(Breakfast)