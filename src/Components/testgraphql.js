import React, { Component } from 'react';
import { withRouter } from 'react-router';
import Background from '../Images/menu_wallpaper.jpg';
import Header from "./header";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

var sectionStyle = {
    width: "100%",
    height: "1080px",
    backgroundImage: `url(${Background})`
};

class TestGraphQL extends Component {
    render() {
        return (
            <section style={ sectionStyle }>
                <Header/>
                <Query query={GRAPHQL_QUERY}>
                    {({ data, loading }) => {


                        let datas = data.reviews.data;
                        return datas.map(data => (
                            <Link key={datas.gid} to={`/conference/${datas.gid}`} className="text-decoration-none w-25" style={{ color: "#000" }}>
                            Text {data.qualifier}
                            </Link>
                        ))
                    }}
                </Query>
            </section>
        )
    }
}

export default withRouter(TestGraphQL)

const GRAPHQL_QUERY = gql`
query x{
  reviews{
    data{
      gid
      qualifier
    }
  }
}
`;