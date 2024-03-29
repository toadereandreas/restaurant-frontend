import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Background from '../Images/food0.jpg';
import Header from "./header";

var sectionStyle = {
    width: "100%",
    height: "1080px",
    backgroundImage: `url(${Background})`
};

class Home extends Component {
    render() {
        return (
            <section style={ sectionStyle }>
                <Header/>
            </section>
        )
    }
}

export default withRouter(Home)