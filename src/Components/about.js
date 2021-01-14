import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Background from '../Images/menu_wallpaper.jpg';
import team1 from '../Images/baracca__echipa1.png';
import team2 from '../Images/baracca__echipa2.png';
import team3 from '../Images/baracca__echipa3.png';
import Header from "./header";

const sectionStyle = {
    width: "100%",
    height: "1080px",
    backgroundImage: `url(${Background})`
};

class About extends Component {

    render() {
        return (
            <section style={ sectionStyle }>
                <Header/>
                <div style={{ height: '800px', width: '80%', paddingLeft: '10%', backgroundColor: 'white', marginLeft: '10%', borderRadius: '15px', textAlign: 'center', margin: 'auto' }}>
                    Profesionalismul, dedicaţia şi dinamica întregii echipe, sunt elementele ce definesc colectivul BARACCA.

                    Rezultatul muncii de aici este o bucătărie contemporană care susţine viaţa sănătoasă şi experienţele care hrănesc în aceaşi măsură trupul şi sufletul.

                    <img src ={team1}/>
                    <img src ={team2}/>
                    <img src ={team3}/>
                </div>
            </section>
        );
    }
}

export default withRouter(About)