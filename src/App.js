import './App.css';
import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Helmet } from "react-helmet";
import Menu from "./Components/menu";
import Home from "./Components/home";
import Reservations from "./Components/reservations";

const client = new ApolloClient({
  uri: "https://www.playgroundev.com/graphql/",
  request: (operation) => {
    const token = localStorage.getItem('AUTH_TOKEN')
    operation.setContext({
      headers: {
        authorization: token ? `JWT ${token}` : '',
      }
    })
  }
})

export default class App extends Component {
  render() {
    return (
        <ApolloProvider client={client}>
          <Router>
            <div >
              <Helmet>
                <meta charSet="utf-8" />
                <title>Restaurant</title>
                <link rel="canonical" href="https://www.undefined.com/" />
                <meta name="description" content="This is a restaurant website!" />
                <meta name="theme-color" content="#008f68" />
              </Helmet>
              <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/menu" component={Menu} />
                <Route exact path={"/reservations"} component={Reservations}/>
              </Switch>
            </div>
          </Router>
        </ApolloProvider>
    );
  }
}