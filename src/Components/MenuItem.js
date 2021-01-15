import React from "react";
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";

const upperButtonTextStyle = {
    fontWeight: '700',
    fontSize: '25px'
};

export default function MenuItem(props) {
    return (
        <Card key={props.menuItem.gid} style={{width: "18rem", backgroundColor: "black", color: "white"}}>
            <Card.Img variant="top" src={"https://sputnik-restaurant.s3.amazonaws.com/" + props.menuItem.picture}/>
            <Card.Body className="d-flex justify-content-between">
                <Card.Text className="">{props.menuItem.price} LEI</Card.Text>
                <Card.Text className="">{props.menuItem.quantity}g</Card.Text>
            </Card.Body>
            <Card.Body>
                <Card.Title>{props.menuItem.internalName}</Card.Title>
                <Card.Text className="d-flex justify-content-end">
                    {props.menuItem.allergens.map((allergen) => allergen.number + " ")}
                </Card.Text>
            </Card.Body>
            <Button variant="outline-light" >
                <text style={upperButtonTextStyle}>Add item</text>
            </Button>
        </Card>
    );
}
