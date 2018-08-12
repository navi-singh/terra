import React, { Component } from 'react'
import { Grid, Col, Image} from 'react-bootstrap';
import './Template.css';
import { Link } from 'react-router-dom';

export default class Template extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Col xs={12} sm={8} smOffset={2}>
          <Link to="/Iframe">
          <Image src={require('../../assets/Web-Applications.png')} rounded className="service-pic" />
          </Link>
          <p>Template 1</p>
            </Col>
        </Grid>
      </div>
    )
  }
}
