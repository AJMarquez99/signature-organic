import React from 'react'
import {Helmet} from "react-helmet";

import Footer from "../components/footer.js"
import Header from "../components/header.js"
import ReviewSection from "../components/ReviewSection.js"

import '../styles/masterstyles.scss'

const IndexPage = () => (
  <div id="homepage-body">
    <Helmet>
      <script defer src="https://use.fontawesome.com/releases/v5.5.0/js/all.js" integrity="sha384-GqVMZRt5Gn7tB9D9q7ONtcp4gtHIUEW/yG7h98J7IpE3kpi+srfFyyB/04OV6pG0" crossorigin="anonymous">
      </script>
    </Helmet>
    <div id="homepage-hero" className="is-row">
      <Header></Header>
    </div>
    <div id="homepage-company-description" className="is-col is-shadow-1">
      <h3 className="section-headers">Let us feed you!</h3>
      <p id="homepage-description-content">Founded in 2017, Signature Organic is a family run business focused on bringing you the best organic produce in the twin cities. We deliver free range poultry, fresh organic eggs, and vegetables and salads. Order now to get farm fresh produce at your doorstep!</p>
    </div>
    <ReviewSection></ReviewSection>
    <Footer className="is-col">
    </Footer>
  </div>
)

export default IndexPage
