import React from 'react'

import './CustomButton.css';

 const CustomButton = (props) => {
    return (
        <div>
           <button >{props.text}
               </button> 
        </div>
    )
}

export default CustomButton;