import React from "react";
import NumButton from "./NumButton";
import CalcButton from "./CalcButton";
import AcButton from "./AcButton";
import DotButton from "./DotButton";
import SciNotButton from "./SciNotButton";
import MsButton from "./MsButton";
import "./css/CalcBoard.css";

const CalcBoard = ({bufferOneOnChange, 
                    bufferTwoOnChange, 
                    diplayModeOneOnChange, 
                    diplayMode, 
                    bufferMode, 
                    claculateResult, 
                    PressAc, 
                    acMode, 
                    PressDot,
                    PressSci,
                    PressM}) => {

    const numIdx = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const clacIdx = ['+', '-', '*', '/', '=', 'x^2', 'e^x', 'ln'];
    const mIdx = ['M+', 'M-', 'MR', 'MC'];

    const pressNumber = (number) => {
        if(!bufferMode) {
            bufferOneOnChange(number);
        }
        else {
            bufferTwoOnChange(number);
        }
    };

    const pressCalc = (clac) => {
        claculateResult(clac);
    }

    const pressAc = () => {
        PressAc();
    }

    const pressDot = () => {
        PressDot();
    }

    const pressSci = () => {
        PressSci();
    }

    const pressM = (mIdx) => {
        PressM(mIdx);
    }

    return(
        <div>
            {numIdx.map(e => 
                <NumButton
                    number = {e}
                    pressNumber = {pressNumber}>
                </NumButton>
            )}
            <DotButton pressDot={pressDot}></DotButton>
            {clacIdx.map(e =>
                <CalcButton
                    calc = {e}
                    pressCalc = {pressCalc}>
                </CalcButton>
            )}
            {mIdx.map(e =>
                <MsButton 
                    mIdx = {e}
                    pressM = {pressM}>
                </MsButton>
            )}
            <SciNotButton pressSci={pressSci}></SciNotButton>
            <AcButton pressAc={pressAc} acMode={acMode}></AcButton>
        </div>
    );
}

export default CalcBoard;