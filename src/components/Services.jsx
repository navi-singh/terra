import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Services.css';

export default class Services extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="subCol padding-1">
              <Image src={require('../assets/App-Development.png')} rounded className="service-pic" />
              <h3>App Development</h3>
              <p>iOS and Android apps development.</p>
            </Col>
            <Col xs={12} sm={4} className="subcol">
            <Link to="/service/templates">
            <Image src={require('../assets/Web-Applications.png')} rounded className="service-pic" />
            </Link>
              <h3>Web Development</h3>
              <p>Website play the most vital role for a business in today's tech advanced world. Our team is speacialized in advanced technolgies to
                create the most advanced web applications.
              </p>
            </Col>
            <Col xs={12} sm={4} className="subCol">
              <Image src={require('../assets/Business-Consulting.jpg')} rounded className="service-pic" />
              <h3>Business Consulting</h3>
              <p> Our qualified team of business consultant works closely with clients to identify the area of improvement
                and implement disciplined, data-driven approach and methodology to efficient improve the key business areas.
                Our team focuses in below areas:
              </p>
              <p>
                Management and strategy<br/>
                Operations<br/>
                Marketing<br/>
                IT<br/>
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
