import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Background from '../Images/menu_wallpaper.jpg';
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
            lat: 46.76754,
            lng: 23.587072
        },
        zoom: 16
    };

    render() {
        return (
            <section style={ sectionStyle }>
                {/*Important! Always set the container height explicitly*/}
                <div style={{ height: '800px', width: '90%', paddingLeft: '10%' }}>
                    <Header/>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key:  "AIzaSyA4hbkkk_2XctdgSaZYsguR9ZVffX2d49E" }}
                        defaultCenter={this.props.center}
                        defaultZoom={this.props.zoom}
                    >
                        <div style={{width: "300px", height: "500px"}}
                            lat={46.76754}
                            lng={23.587072}
                            text="My Marker"
                        />
                    </GoogleMapReact>
                </div>
            </section>
        );
    }
}

export default withRouter(Location)