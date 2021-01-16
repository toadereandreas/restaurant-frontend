import React from "react";
import { Component } from 'react';
import Card from "react-bootstrap/Card";
import {Button} from "react-bootstrap";
import MenuItemForm from "./MenuItemForm";
import {gql} from '@apollo/client';
import { Mutation } from 'react-apollo';

const upperButtonTextStyle = {
    fontWeight: '700',
    fontSize: '25px'
};

export default class MenuItem extends Component{

    state = {
        quantity: ''
    }

    handleInput = e =>{
        const formData = {};
        formData[e.target.name] = e.target.value;
        this.setState({...formData});
        console.log("State changed, quantity is now:" + e.target.value);
    }

    render() {
        const { quantity } = this.state;


        return (
            <Card key={this.props.menuItem.gid} style={{width: "18rem", backgroundColor: "black", color: "white"}}>
                <Card.Img variant="top" src={"https://sputnik-restaurant.s3.amazonaws.com/" + this.props.menuItem.picture}/>
                <Card.Body className="d-flex justify-content-between">
                    <Card.Text className="">{this.props.menuItem.price} LEI</Card.Text>
                    <Card.Text className="">{this.props.menuItem.quantity}</Card.Text>
                </Card.Body>
                <Card.Body>
                    <Card.Title>{this.props.menuItem.internalName}</Card.Title>
                    <Card.Text className="d-flex justify-content-end">
                        {this.props.menuItem.allergens.map((allergen) => allergen.number + " ")}
                    </Card.Text>
                </Card.Body>


                <Mutation
                    mutation={CREATE_ORDER_MENUITEM}
                    variables={{
                        menuItem: this.props.menuItem.gid,
                        order: localStorage.getItem("ORDER_GID"),
                        quantity: Number(this.state.quantity)
                    }}
                    onCompleted={console.log("works")}
                >
                    {createOrderMenuItem =>  (
                    <form onSubmit={(e) => {
                        e.preventDefault();
                        createOrderMenuItem().then(() => {
                            this.setState({
                                quantity: '',
                            })
                        }).catch(e => console.log(e))
                    }}>
                        <input
                                style={{width: '100%'}}
                                name="quantity"
                                onChange={this.handleInput}
                                value={quantity} type="tex"
                                placeholder="quantity"
                        />
                        <Button type="submit" style={{width: '100%'}} variant="outline-light" >
                            <text style={upperButtonTextStyle}>Add item</text>
                        </Button>
                    </form>
                    )}
                </Mutation>
            </Card>
        );
    }
}

const CREATE_ORDER_MENUITEM = gql`
mutation createOrderMenuItem($menuItem: String!, $order: String!, $quantity: Int){
  createOrderMenuItem(input: {menuItem: $menuItem, order: $order, quantity: $quantity}){
    orderMenuItem{
      gid,
      order{
        gid
      }
      servingId
    }
    errors{
      field
      messages
    }
  }
}
`