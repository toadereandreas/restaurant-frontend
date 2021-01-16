import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Background from '../Images/menu_wallpaper.jpg';
import Header from "./header";
import {gql} from '@apollo/client';
import { Mutation } from 'react-apollo';
import CartForm from './CartForm';

const sectionStyle = {
    width: "100%",
    height: "1080px",
    backgroundImage: `url(${Background})`
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
        console.log("WHAAAAAT");
        localStorage.setItem("USER_COLOR", JSON.stringify(data.createOrderFrontend.order.color));
        localStorage.setItem("ORDER_GID", JSON.stringify(data.createOrderFrontend.order.gid));
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
                                }
                                );
                        }
                    }>
                    {createOrderFrontend => (
                        <CartForm onSubmit={createOrderFrontend}>
                        </CartForm>
                    )}
                </Mutation>
            </section>
        );
    }
}

const CREATE_ORDER_MUTATION = gql`
mutation createOrderFrontend($servingCode: String!) {
    createOrderFrontend(servingCode: $servingCode) {
        order {
            gid
            serving {
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