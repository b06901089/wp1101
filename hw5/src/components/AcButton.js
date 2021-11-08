import React from "react";
import "./css/Button.css";

const AcButton = ({pressAc, acMode}) => {
    return(
        <button 
            onClick = {() => pressAc()} 
            className="button-31" 
            role="button">
            {(acMode) ? ('C') : ('Ac')}
        </button>
    ); 
}

export default AcButton;