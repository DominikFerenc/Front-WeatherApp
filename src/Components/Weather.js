import React from 'react';
import './Weather.css';
import {ReactComponent as Logo} from './sun.svg';
import {ReactComponent as Sun} from './SVG/sleet.svg'

 const Weather = () => {
    return (
        <div className="weather-widget">
            <h2> Weather Template</h2>
            <div className="local-weather-report">
                <h3>LOCAL WEATHER REPORT</h3>
                <div className="left">
<div className="icon-main">
    <Sun/>
</div>
<div className="icon-text">
    14km/g SW
</div>
                </div>
                <div className="right">
                <div className="text-right-top">
                Sunday <span>Sunny</span>
                </div>
<div className="text-temperature">
    22°C
    71.6°F
</div>
                </div>
            </div>
        </div>
    )
}


export default Weather;