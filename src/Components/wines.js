import React from 'react';
import Background from '../Images/wines.jpg';
import Header from "./header";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/react-hooks"
import { CardDeck } from 'react-bootstrap';
import MenuItem from "./MenuItem";

const sectionStyle = {
    width: "100%",
    height: "1080px",
    backgroundImage: `url(${Background})`
};

export default function Wines() {
    const { loading, error, data } = useQuery(GET_WINES_ITEMS);

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
        </section>
    )
}

const GET_WINES_ITEMS = gql`
    query menuItems {
        menuItems(categoryName: "Wines") {
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