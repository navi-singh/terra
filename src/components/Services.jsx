import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

import './Services.css';

export default class Services extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="services">
              <Image src={require('../assets/App-Development.png')} rounded className="service-pic" />
              <h3>App Development</h3>
              <p>iOS and Android apps development.cfiehvuebrfuh wuefwufebuwf wudyweuyw bduwehduww dwuefbwub</p>
            </Col>
            <Col xs={12} sm={4} className="services">
              <Image src={require('../assets/Web-Applications.png')} rounded className="service-pic" />
              <h3>Web Development</h3>
              <p>ewfjowejf weifjewoijf wefjwoiefjwe foiwejfowijfw oweifjwoejf woefjwoefn fweofi</p>
            </Col>
            <Col xs={12} sm={4} className="services">
              <Image src={require('../assets/Business-Consulting.jpg')} rounded className="service-pic" />
              <h3>Business Consulting</h3>
              <p>fewnfwoief woeifnwoiefj oweifjwoijf woeifjwoiejf woeifjwoiejf woeifjwoijef owiejfwn</p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
