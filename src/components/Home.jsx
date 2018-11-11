import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './Home.css';
import { Jumbotron, Grid, Button } from 'react-bootstrap';

export default class Home extends Component {
  render() {
    return (
      <div className="homeContainer">
        <Grid className="gridHolder">
          <Jumbotron>
            <h2>Welcome to IkWish</h2>
            <p>Build awareness, expand your sales pipeline with customer friendly websites and utilize our social media exterpertise to grow your business.
              Our qualified team works boudlessly with our clients to optimize their operating costs, increase their customer reach and implement strategies to
               increase revenue. Our full-funnel sales and marketing solution will take your prospects from first touch to close</p>
            <Link to="/about">
              <Button bsStyle="primary">Learn More</Button>
            </Link>
          </Jumbotron>
        </Grid>
      </div>
    )
  }
}
