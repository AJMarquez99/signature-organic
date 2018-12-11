import React, { Component } from 'react'
import Map from "./Map.js"

class Footer extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

render(){
    return(
      <div
      style={{
        background: '#B67F42',
        marginTop: '1.45rem',
      }}
      >
      <div
        className ="is-row"
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem'
        }}
        >
        <div className ="is-col" >
          <h1 style={{ margin: 0 }}>
            Contact Us
          </h1>
          <div className="is-row contact-icons">
            <i class="fas fa-envelope"></i>
            <p>
              email: signatureorganicfarm@gmail.com
            </p>
          </div>
          <div className="is-row contact-icons">
            <i class="fab fa-whatsapp"></i>
            <p>
              whatsapp: m.me/SignatureOrganicFarm
            </p>
          </div>
          <div className="is-row contact-icons">
            <i class="fas fa-phone"></i>
            <p>
              +92 334 4542424
            </p>
          </div>
        </div>
        <div className ="is-col"id="homepage-google-map">
          <Map
           googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
           loadingElement={<div style={{ height: `100%` }} />}
           containerElement={<div style={{ height: `100%` }} />}
           mapElement={<div style={{ height: `100%` }} />}
           isMarkerShown ={"true"}
            />
        </div>
      </div>
    </div>
  )
  }
}

export default Footer
