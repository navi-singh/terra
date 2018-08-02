import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
  render() {
    return (
      <Grid>
        <Jumbotron>
          <h2>Welcome to IkWish</h2>
          <p>Welcome message .efuwiefeauyfbwyegfuw fuwbfuweybf hbwuyegdwuy jbdwejduy</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link>
        </Jumbotron>
      </Grid>
    )
  }
}
