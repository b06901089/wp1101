import React from "react";
import "./css/Button.css";

const MsButton = ({mIdx, pressM}) => {
    return(
        <button 
            onClick = {() => pressM(mIdx)} 
            className="button-31" 
            role="button">
            {mIdx}
        </button>
    );
}

export default MsButton;