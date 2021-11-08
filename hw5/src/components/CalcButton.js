import React from "react";
import "./css/Button.css";

const CalcButton = ({calc, pressCalc}) => {

    const clacDisplay = (c) => {
        if(c === '+') return('+');
        else if(c === '-') return('-');
        else if(c === '*') return('*');
        else if(c === '/') return('/');
        else if(c === '=') return('=');
        else if(c === 'x^2') return('x^2');
        else if(c === 'e^x') return('e^x');
        else if(c === 'ln') return('ln');
        else return('Nan')
    }

    return(
        <button 
            onClick = {() => pressCalc(calc)} 
            className="button-31" 
            role="button">
            {clacDisplay(calc)}
        </button>
    );
}

export default CalcButton;