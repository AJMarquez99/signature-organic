import React from 'react'

import Footer from "../components/footer.js"
import Header from "../components/header.js"
import ReviewSection from "../components/ReviewSection.js"

import '../styles/index.css'
import '../styles/kube.css'

const IndexPage = () => (
  <div id="homepage-body">
    <div id="homepage-hero" className="is-row">
      <Header></Header>
    </div>
    <div id="homepage-company-description" className="is-col">
      <p id="homepage-description-content">Founded in 2017, Signature Organic is a family run business focused on bringing you the best organic produce in the twin cities. We deliver free range poultry, fresh organic eggs, and vegetables and salads. Order now to get farm fresh produce at your doorstep!</p>
    </div>
    <ReviewSection></ReviewSection>
    <Footer className="is-col">
    </Footer>
  </div>
)

export default IndexPage
