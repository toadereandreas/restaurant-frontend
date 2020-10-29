import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Background from '../Images/desserts.jpg';
import Header from "./header";

const sectionStyle = {
    width: "100%",
    height: "1080px",
    backgroundImage: `url(${Background})`
};

class Dessert extends Component {
    render() {
        return (
            <section style={sectionStyle}>
                <Header/>
            </section>
        )
    }
}

export default withRouter(Dessert)