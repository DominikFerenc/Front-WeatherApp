import React, { Component } from 'react'
import { geolocated } from "react-geolocated";


 const Geolocation = (props) => {
    return !props.isGeolocationAvailable ? (
        <div>Your browser does not support Geolocation</div>
    ) : !props.isGeolocationEnabled ? (
        <div>Geolocation is not enabled</div>
    ) : props.coords ? (
        
            <div>
                    <p>latitude</p>
                    <p>{props.coords.latitude}</p>
               
                    <p>longitude</p>
                    <p>{props.coords.longitude}</p>
               
                    <p>altitude</p>
                    <p>{props.coords.altitude}</p>
                
                    <p>heading</p>
                    <p>{props.coords.heading}</p>
               
                    <p>speed</p>
                    <p>{props.coords.speed}</p>
                    </div>
      
    ) : (
        <div>Getting the location data&hellip; </div>
    );
}

export default geolocated ({
    positionOptions: {
        enableHighAccurary: false
    },
    userDecisionTimeout:5000,
})(Geolocation);