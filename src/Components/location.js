import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Background from '../Images/desserts.jpg';
import GoogleMapReact from 'google-map-react';
import Header from "./header";

const sectionStyle = {
    width: "100%",
    height: "1080px",
    backgroundImage: `url(${Background})`
};

class Location extends Component {
    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    render() {
        return (
            // Important! Always set the container height explicitly
            <div style={{ height: '100vh', width: '100%' }}>
                asdasd
                <GoogleMapReact
                    bootstrapURLKeys={{ key:  "AIzaSyA4hbkkk_2XctdgSaZYsguR9ZVffX2d49E" }}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                >
                    <div style={{width: "300px", height: "500px"}}
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        );
    }
}

export default withRouter(Location)