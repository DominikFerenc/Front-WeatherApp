import React,{Component} from 'react'

import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import Rectangle from 'react-rectangle';
import './CustomMap.css';

  
    const position = [50.17, 21.25];

    const CustomMap=()=> {
     return (
     <div className="leaflet-container">
         <Map center={position} zoom={13}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />
        <Marker position={position}>
          <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
        </Marker>
      </Map>
      </div>)
    }
    
    export default CustomMap;