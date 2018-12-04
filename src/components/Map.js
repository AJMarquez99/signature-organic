import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import MapMarker from './MapMarker.js'

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
    defaultZoom={10}
    defaultCenter={{ lat: 33.180043, lng: 72.678101 }}
  >
    {props.isMarkerShown && <Marker position={{ lat: 33.180043, lng: 72.678101 }}/>}
  </GoogleMap>
))

export default Map
