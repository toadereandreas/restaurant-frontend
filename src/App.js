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
import Wines from "./Components/wines";
import Drinks from "./Components/drinks";
import Breakfast from "./Components/breakfast";
import Lunch from "./Components/lunch";
import Dinner from "./Components/dinner";
import Coffee from "./Components/coffee";
import Dessert from "./Components/dessert";
import Location from "./Components/location";

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

                /*TODO Marius: implement listing of the items for each of the following categories. Create components
                TODO for each routing path. They should be similar.*/
                <Route exact path={"/dinner"} component={Dinner}/>
                <Route exact path={"/lunch"} component={Lunch}/>
                <Route exact path={"/breakfast"} component={Breakfast}/>
                <Route exact path={"/wines"} component={Wines}/>
                <Route exact path={"/drinks"} component={Drinks}/>
                <Route exact path={"/desserts"} component={Dessert}/>
                <Route exact path={"/coffee"} component={Coffee}/>

                <Route exact path={"/location"} component={Location}/>
              </Switch>
            </div>
          </Router>
        </ApolloProvider>
    );
  }
}