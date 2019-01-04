import React from 'react'

const MapMarker = (props) => {
  return(<div>
            <i class="fas fa-map-marker"></i>
            <div>
              <p>{props.text}</p>
            </div>
         </div>)
}

export default MapMarker
