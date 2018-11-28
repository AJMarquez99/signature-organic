import React from 'react'
import GoogleMapReact from 'google-map-react';
import {Helmet} from "react-helmet";

import Footer from "../components/footer.js"
import Header from "../components/header.js"
import ReviewSection from "../components/ReviewSection.js"

import '../styles/masterstyles.scss'



const IndexPage = () => (
  <div id="homepage-body">
    <Helmet>
      <script src="https://maps.googleapis.com/maps/api/js" async defer></script>
    </Helmet>
    <div id="homepage-hero" className="is-row">
      <Header></Header>
    </div>
    <div id="homepage-company-description" className="is-col is-shadow-1">
      <h3 className="section-headers">Let us feed you!</h3>
      <p id="homepage-description-content">Founded in 2017, Signature Organic is a family run business focused on bringing you the best organic produce in the twin cities. We deliver free range poultry, fresh organic eggs, and vegetables and salads. Order now to get farm fresh produce at your doorstep!</p>
    </div>
    <ReviewSection></ReviewSection>
    <div id="homepage-google-map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyC_MHkASVBo7Iq95eQdPxXROl-uZ70HYKE"}}
         center={{
          lat: 26.092891,
          lng: 85.948970
        }}
         zoom ={5}
         >
       </GoogleMapReact>

    </div>
    <Footer className="is-col">
    </Footer>
  </div>
)

export default IndexPage
