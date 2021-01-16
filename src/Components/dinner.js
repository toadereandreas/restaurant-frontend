import React from 'react';
import Background from '../Images/dinner.jpg';
import Header from "./header";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks"
import { CardDeck } from 'react-bootstrap';
import MenuItem from "./MenuItem";

const sectionStyle = {
    width: "100%",
    height: "1080px",
    backgroundImage: `url(${Background})`,
};

export default function Dinner() {
    const { loading, error, data } = useQuery(GET_DINNER_ITEMS);

    if (loading) return "Loading...";
    if (error) return `Error! ${error.message}`;

    return (
        <section style={sectionStyle}>
            <Header />
            <CardDeck className="mx-2 my-3">
            {data.menuItems.data.map(menuItem => (
                <MenuItem menuItem = {menuItem}></MenuItem>
            ))}
            </CardDeck>
            <br></br>
            <div style={{backgroundColor: "black", width: "20%", marginLeft: "40%", textAlign: "center", color: "white", borderRadius: "10px"}}>
                <ul style={{listStyle: "none"}}>
                    <li>Alergeni</li>
                    <li>1: Lapte</li>
                    <li>2: Oua</li>
                    <li>3: Peste</li>
                    <li>4: Alune</li>
                    <li>5: Soia</li>
                </ul>
            </div>
        </section>
    )
}

const GET_DINNER_ITEMS = gql`
    query menuItems {
        menuItems(categoryName: "Dinner") {
            data {
                gid
                internalName
                picture
                price
                quantity
                allergens {
                    number
                }
            }
        }
    }
`;