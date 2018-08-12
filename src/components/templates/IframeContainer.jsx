import React, { Component } from 'react'
import './IframeContainer.css';
import Iframe from 'react-iframe';

export default class IframeContainer extends Component {
  createMarkup() { return {__html: '<iframe src="./main.html" style="border:2px solid red;"></iframe>'}; };

  render() {

    return (
      <div>
      <nav classNameName="navbar navbar-default">
        <div classNameName="container">
          <div classNameName="navbar-header">
            <button type="button" classNameName="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbarItems" aria-expanded="false">
              <span classNameName="sr-only">Toggle navigation</span>
              <span classNameName="icon-bar"></span>
              <span classNameName="icon-bar"></span>
              <span classNameName="icon-bar"></span>
            </button>
            <a classNameName="navbar-brand" href="#"><span classNameName="glyphicon glyphicon-picture" aria-hidden="true"></span> IMGS</a>
          </div>
          <div classNameName="collapse navbar-collapse" id="navbarItems">
            <ul classNameName="nav navbar-nav">
            	<li><a href="#">About</a></li>
            	<li><a href="#">Contact</a></li>
            </ul>
            <ul classNameName="nav navbar-nav navbar-right">
            	<li><a href="#">Sign Up</a></li>
            	<li><a href="#">Login</a></li>
            </ul>
           </div>
      	</div>
      </nav>
      <div className="container">
      	<div className="jumbotron">
      		<h1><span className="glyphicon glyphicon-camera" aria-hidden="true"></span> The Image Gallery</h1>
      		<p>A bunch of beautiful images that I got from unsplash website!</p>
      	</div>

      	<div className="row">
      		<div className="col-lg-4 col-md-6"><img src="https://images.unsplash.com/photo-1469053913977-1d2f009670d9?dpr=2&auto=compress,format&fit=crop&w=767&h=508&q=80&cs=tinysrgb&crop=" className="img-thumbnail"/></div>
      		<div className="col-lg-4 col-md-6"><img src="https://images.unsplash.com/photo-1428447638737-040fa5316956?dpr=2&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=" className="img-thumbnail"/></div>
      		<div className="col-lg-4 col-md-6"><img src="https://images.unsplash.com/photo-1469053913977-1d2f009670d9?dpr=2&auto=compress,format&fit=crop&w=767&h=508&q=80&cs=tinysrgb&crop=" className="img-thumbnail"/></div>
      	</div>
      	<div className="row">
      		<div className="col-lg-4 col-md-6"><img src="https://images.unsplash.com/photo-1469053913977-1d2f009670d9?dpr=2&auto=compress,format&fit=crop&w=767&h=508&q=80&cs=tinysrgb&crop=" className="img-thumbnail"/></div>
      		<div className="col-lg-4 col-md-6"><img src="https://images.unsplash.com/photo-1428447638737-040fa5316956?dpr=2&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=" className="img-thumbnail"/></div>
      		<div className="col-lg-4 col-md-6"><img src="https://images.unsplash.com/photo-1469053913977-1d2f009670d9?dpr=2&auto=compress,format&fit=crop&w=767&h=508&q=80&cs=tinysrgb&crop=" className="img-thumbnail"/></div>
      	</div>
      	<div className="row">
      		<div className="col-lg-4 col-md-6"><img src="https://images.unsplash.com/photo-1469053913977-1d2f009670d9?dpr=2&auto=compress,format&fit=crop&w=767&h=508&q=80&cs=tinysrgb&crop=" className="img-thumbnail"/></div>
      		<div className="col-lg-4 col-md-6"><img src="https://images.unsplash.com/photo-1428447638737-040fa5316956?dpr=2&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=" className="img-thumbnail"/></div>
      		<div className="col-lg-4 col-md-6"><img src="https://images.unsplash.com/photo-1469053913977-1d2f009670d9?dpr=2&auto=compress,format&fit=crop&w=767&h=508&q=80&cs=tinysrgb&crop=" className="img-thumbnail"/></div>
      	</div>

      </div>
      </div>
    )
  }
}
