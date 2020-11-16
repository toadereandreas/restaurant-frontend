import './App.css';
import React, { Component } from 'react';
import { ApolloProvider } from "@apollo/react-hooks";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import Menu from "./Components/menu";
import Home from "./Components/home";
import Reservations from "./Components/reservations";
import Wines from "./Components/wines";
import Drinks from "./Components/drinks";
import Breakfast from "./Components/breakfast";
import Lunch from "./Components/lunch";
import Dinner from "./Components/dinner";
import Coffee from "./Components/coffee";
import Dessert from "./Components/dessert";
import Location from "./Components/location";
import Reviews from "./Components/reviews";
import About from "./Components/about";
import TestGraphQL from "./Components/testgraphql";
import gql from 'graphql-tag';

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: "https://restaurant.playgroundev.com/graphql/",
    cache: new InMemoryCache(),
});

client
    .query({
      query: gql`
            query x{
              dummies{
                data{
                  gid
                  testName
                  testAge
                }
              }
            }
    `
    })
    .then(result => console.log(result))
    .catch(()=>console.log("dasdas"));

// const client = new ApolloClient({
//   uri: "http://restaurant-env.eba-prznaj7v.eu-west-3.elasticbeanstalk.com/graphql/",
//   request: (operation) => {
//     const token = localStorage.getItem('AUTH_TOKEN')
//     operation.setContext({
//       headers: {
//         authorization: token ? `JWT ${token}` : '',
//       }
//     })
//   }
// })


export default class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Helmet>
                        <meta charSet="utf-8" />
                        <title>Restaurant</title>
                        <link rel="canonical" href="https://www.undefined.com/" />
                        <meta name="description" content="This is a restaurant website!" />
                        <meta name="theme-color" content="#008f68" />
                    </Helmet>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/menu" component={Menu} />
                        <Route exact path={"/reservations"} component={Reservations} />
                        <Route exact path={"/dinner"} component={Dinner} />
                        <Route exact path={"/lunch"} component={Lunch} />
                        <Route exact path={"/breakfast"} component={Breakfast} />
                        <Route exact path={"/wines"} component={Wines} />
                        <Route exact path={"/drinks"} component={Drinks} />
                        <Route exact path={"/desserts"} component={Dessert} />
                        <Route exact path={"/coffee"} component={Coffee} />

                        <Route exact path={"/location"} component={Location} />
                        <Route exact path={"/reviews"} component={Reviews} />
                        <Route exact path={"/about"} component={About} />
                        <Route exact path={"/testGraphQL"} component={TestGraphQL} />
                    </Switch>
                </div>
            </Router>
        </ApolloProvider>
    );
  }
}