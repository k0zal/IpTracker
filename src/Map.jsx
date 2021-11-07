import React,{useContext, useEffect} from 'react'
import "./Map.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
const position = [57.708870, 11.974560]
import { Context } from "./ContextProvider"
import IconLocation from "./utilities/images/icon-location.svg"

function Map() {
  const {loc, theirIp} = useContext(Context)
  
  const iconMarker = L.icon({
    iconUrl: IconLocation,
    iconSize: L.point(32, 40),
});
 
  

    return (
       
      <>
        {loc.length > 1 &&
        <MapContainer center={loc} zoom={13} scrollWheelZoom={false}>
        <TileLayer
        
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={loc} icon={iconMarker}>
          
        </Marker>
      </MapContainer>
}
 </>    
        
    
    )
}

export default Map
