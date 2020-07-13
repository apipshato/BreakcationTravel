import React, { Component } from "react";
import Header from "parts/Header";
import landingPage from "json/landingPage.json";
import Hero from "parts/Hero";
import MostPicked from "parts/MostPicked";
import Catagories from "parts/Catagories";
import Testimony from "parts/Testimoni";
import Footer from 'parts/Footer'


export default class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  render() {
    return (
      <>
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero} />
        <MostPicked
          refMostPicked={this.refMostPicked}
          data={landingPage.mostPicked}
        />
        <Catagories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial} />
        <Footer/>
      </>
    );
  }
}
