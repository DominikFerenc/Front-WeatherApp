import React, {useState} from 'react'

import "./GridPanels.css";
import Time from './TimeComponent';
import Geolocation from './Geolocation';



 const GridPanels = () => {

    return (

       <div className="container">
      <div className="bg1">
        <h2> <Time/> <i class="far fa-clock"></i></h2>
      </div>
      <div className="bg1">
       <Geolocation/>
        <p>Geo</p>
      </div>
      <div className="bg2">
        <h2><i class="fas fa-sun"></i></h2>
        <p>From Dawn</p>
      </div>
      <div className="bg1">
        <h2>36 &deg;<i class="fas fa-thermometer-full"></i></h2>
        <p>Temperature</p>
      </div>
      <div className="bg1">
        <h2><i className="fas fa-bed"></i></h2>
        <p>Sleep Keep</p>
      </div>
      <div className="bg2">
        <h2>98 <span>bpm</span></h2>
        <p>Heart Rate</p>
      </div>
      <div className="bg1">
        <h2>170 <span>lbs</span></h2>
        <p>Weight</p>
      </div>
      <div className="bg1">
        <h2>28 <span>%</span></h2>
        <p></p>
      </div>
      <div className="bg2">
        <h2>4 <span>:41</span></h2>
        <p>Till Dusk</p>
      </div>
      <div className="bg2">
        <h2>680 <span>kcal</span></h2>
        <p></p>
      </div>
      <div className="bg2">
        <h2><i className="fas fa-thermometer-full"></i></h2>
        <p>Temperature</p>
      </div>
      <div className="bg2">
        <h2>85 <span>%</span></h2>
        <p>Body Hydration</p>
      </div>
      <div className="bg2">
        <h2>85 <span>%</span></h2>
        <p>Body Hydration</p>
      </div>
      <div className="bg2">
        <h2>85 <span>%</span></h2>
        <p>Body Hydration</p>
      </div>
      <div className="bg2">
        <h2>85 <span>%</span></h2>
        <p>Body Hydration</p>
      </div>
      <div className="bg2">
        <h2>85 <span>%</span></h2>
        <p>Body Hydration</p>
      </div>    
      
            
        </div>
    )
}

export default GridPanels;