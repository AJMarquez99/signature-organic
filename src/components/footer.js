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
        <h1 className ="is-col" style={{ margin: 0 }}>
          Contact Us
        </h1>
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
