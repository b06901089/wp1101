import React from "react";
import "./css/Button.css";

const SciNotButton = ({pressSci}) => {
    return(
        <button 
            onClick={() => pressSci()}
            className="button-31"
            role="button">
            {'Sci'}
        </button>  
    );
}

export default SciNotButton;