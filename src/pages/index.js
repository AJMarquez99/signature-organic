import React from 'react'
import { Link } from 'gatsby'

import Footer from "../components/footer.js"

import '../styles/index.css'
import '../styles/kube.css'

const IndexPage = () => (
  <div id="homepage-body">
    <div id="homepage-logo-container" className="is-row">
      <div id="signature-organic-logo" className="is-col is-10">
        <img src="https://imgur.com/rbR6lBj.jpg" alt="Signature Organic Logo"></img>
      </div>
    </div>
    <div id="homepage-company-description" className="is-col">
      <p id="homepage-description-content">Founded in 2017, Signature Organic is a family run business focused on bringing you the best organic produce in the twin cities. We deliver free range poultry, fresh organic eggs, and vegetables and salads. Order now to get farm fresh produce at your doorstep!</p>
    </div>
    <Footer className="is-col">


    </Footer>
  </div>
)

export default IndexPage
