import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Background from '../Images/menu_wallpaper.jpg';
import Header from "./header";

var sectionStyle = {
    width: "100%",
    height: "1080px",
    backgroundImage: `url(${Background})`
};

class Reservations extends Component {
    render() {
        return (
            <section style={ sectionStyle }>
                <Header/>
            </section>
        )
    }
}

export default withRouter(Reservations)