import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Background from '../Images/menu_wallpaper.jpg';
import Header from "./header";
import {gql} from '@apollo/client';
import { Mutation, Query } from 'react-apollo';
import CartForm from './CartForm';
import MenuItem from "./MenuItem";
import {Button, CardDeck} from "react-bootstrap";
import {useQuery} from "@apollo/react-hooks";

const sectionStyle = {
    width: "100%",
    height: "1080px",
    backgroundImage: `url(${Background})`
};

const upperButtonTextStyle = {
    fontWeight: '700',
    fontSize: '25px'
};


class Cart extends Component {
    state = {
        errorMessage: ''
    }

    constructor(props) {
        super(props);
        this.state = { value: "", color: "" };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert("A name was submitted: " + this.state.value);
        event.preventDefault();
    }

    _confirm = async (data) => {
        alert('Code confirmed!')
        console.log("WHAAAAAT");
        localStorage.setItem("USER_COLOR", data.createOrderFrontend.order.color);
        localStorage.setItem("ORDER_GID", data.createOrderFrontend.order.gid);
        localStorage.setItem("SERVING_GID", data.createOrderFrontend.order.serving.gid);
        window.location.reload();
        console.log(localStorage.getItem("USER_COLOR"));
    };

    render() {
        return (
            <section style={sectionStyle}>
                <Header />
                <Mutation mutation={CREATE_ORDER_MUTATION}
                    onCompleted={data => this._confirm(data)}
                    onError={
                        ({ graphQLErrors, networkError }) => {
                            if (graphQLErrors)
                                graphQLErrors.map(({ message, locations, path }) => {
                                    this.setState({ errorMessage: message });
                                    console.log(message);
                                    alert("Invalid code!");
                                }
                                );
                        }
                    }>
                    {createOrderFrontend => (
                        <CartForm onSubmit={createOrderFrontend}>
                        </CartForm>
                    )}
                </Mutation>
                <Mutation
                    mutation={CALL_WAITER_MUTATION}
                    variables={{
                        id: localStorage.getItem("SERVING_GID")
                    }}
                    onCompleted={console.log("Mutation completed")}
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
                            <Button type="submit" style={{width: '100%'}} variant="outline-light" >
                                <text style={upperButtonTextStyle}>CALL WAITER</text>
                            </Button>
                        </form>
                    )}
                </Mutation>
                {/*<Query query={GET_CART}>*/}
                {/*    {({data, loading}) =>  {data.orderMenuItems.data.map(MenuItem => <div>{MenuItem.price}</div>)*/}
                {/*    }}*/}
                {/*</Query>*/}
            </section>
        );
    }
}

const CALL_WAITER_MUTATION = gql`
mutation updateServing($id: ID!) {
  updateServing(id: $id, input: {called: true}) {
    serving {
      name
      code
      called
    }
  }
}
`

const GET_CART = gql`
query getOrderMenuItems{
orderMenuItems{
    data{
      menuItem{
           gid
           internalName
           picture
           price
           quantity
           allergens {
               number
           }
      }
      order{
        gid
      }
      quantity
    }
  }
}
`

const CREATE_ORDER_MUTATION = gql`
mutation createOrderFrontend($servingCode: String!) {
    createOrderFrontend(servingCode: $servingCode) {
        order {
            gid
            serving {
                gid
                name
                code
            }
            color
            note
            locked
        }
        errors {
            messages
            field
        }
    }
}
`;

export default withRouter(Cart)