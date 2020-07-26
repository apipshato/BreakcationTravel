import React, { Component } from "react";
import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import ItemDetails from "json/itemDetails.json";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Fade from "react-reveal/Fade";
import Footer from "parts/Footer";
import Catagories from "parts/Catagories";
import Testimony from "parts/Testimoni";

export default class DetailPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Details", pageHref: "" },
    ];
    return (
      <>
        <Header {...this.props}></Header>
        <PageDetailTitle
          breadcumb={breadcumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
        <section className="container">
          <div className="row">
            <div className="col-7 pr-5">
              <Fade bottom>
                <PageDetailDescription
                  data={ItemDetails}
                />
              </Fade>
            </div>
            <div className="col-5"><BookingForm itemDetails ={ItemDetails}/></div>
          </div>
        </section>
        <Catagories data={ItemDetails.categories}/>
        <Testimony data={ItemDetails.testimonial}/>
        <Footer />
      </>
    );
  }
}
