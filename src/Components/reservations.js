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
                <div style={{ top: '10%', fontSize: '30px', color: 'white',height: '800px', width: '80%', paddingLeft: '10%', backgroundColor: 'transparent', marginLeft: '10%', borderRadius: '15px', textAlign: 'center', margin: 'auto' }}>
                    Pentru rezervări ne puteţi contacta oricând la +4 0732 155 177, iar pentru evenimente speciale sau grupuri de peste 10 persoane, va rugăm să ne scrieţi un mesaj la rezervari@baracca.ro

                    Restaurantul funcţionează după următorul program:

                    Marti – Sambata   —  18.00-22.00

                    Duminica si Luni – Inchis

                    În perioada sărbătorilor legale, restaurantul este închis.
                </div>
            </section>
        )
    }
}

export default withRouter(Reservations)