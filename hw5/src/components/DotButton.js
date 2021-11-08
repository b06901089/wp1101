import React from "react";
import "./css/Button.css";

const DotButton = ({pressDot}) => {
    return(
        <button 
            onClick={() => pressDot()}
            className="button-31"
            role="button">
            {'.'}
        </button>  
    );
}

export default DotButton;