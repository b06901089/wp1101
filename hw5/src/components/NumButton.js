import React from "react";
import "./css/Button.css";

const NumButton = ({number, pressNumber}) => {
    return(
        <button 
            onClick = {() => pressNumber(number)} 
            className="button-31" 
            role="button">
            {number}
        </button>
    );
}

export default NumButton;