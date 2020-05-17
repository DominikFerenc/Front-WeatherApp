import React, { Component, useState } from 'react'
import { geolocated } from "react-geolocated";
import Geocode from "react-geocode";


 const Geolocation = (props) => {
     const [city, setCity] = useState('')
     
    const setUserCity=()=> {
        Geocode.fromLatLng(props.coords.latitude, props.coords.longitude).then(
            response => {
              const address = response.results[0].formatted_address;
              console.log("DUPAAAA" + address);
            },
            error => {
              console.error("BLAD" + error);
            }
          );
     }
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
    <p>{setUserCity()}</p>  
    <p>{city}</p>
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