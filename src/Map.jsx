import React,{useContext, useEffect} from 'react'
import "./Map.css"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
const position = [57.708870, 11.974560]
import { Context } from "./ContextProvider"

function Map() {
  const {loc, theirIp} = useContext(Context)
  
 
  
//   useEffect(() => {
//     return(
//     <>
//     {loc.length > 1 &&
//     <MapContainer center={loc} zoom={13} scrollWheelZoom={false}>
//     <TileLayer
//       attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
//       url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//     />
//     <Marker position={loc}>
//       <Popup>
//         A pretty CSS3 popup. <br /> Easily customizable.
//       </Popup>
//     </Marker>
//   </MapContainer>
// }
// </>
//     )
//   }, [loc])

    return (
       
      <>
        {loc.length > 1 &&
        <MapContainer center={loc} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={loc}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
}
 </>    
        
    
    )
}

export default Map
