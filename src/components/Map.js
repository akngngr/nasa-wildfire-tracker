import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import LocationMarker from './LocationMarker'
import LocationInfo from './LocationInfo'

const WILD_FIRE = "wildfires"

const Map = ({ eventData, center, zoom }) => {
const [locationInfo, setlocationInfo] = useState(null)

const markers = eventData.map((ev,index) => {
    if(ev.categories[0].id === WILD_FIRE) {
        return (
            <LocationMarker 
                key={index} 
                lat={ev.geometry[0].coordinates[1]} 
                lng={ev.geometry[0].coordinates[0]}
                onClick={() => setlocationInfo({ id: ev.id, title: ev.title, date: ev.geometry[0].date, total: eventData.length })} 
            />
        )
    }
    return null
})

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                defaultCenter = { center }
                defaultZoom = { zoom }
            >
               {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfo info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 42.361145,
        lng: -120.057083
    },
    zoom: 5
}

export default Map
