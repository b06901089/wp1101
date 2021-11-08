import React from "react";

const DebugBoard = ({bufferOne, bufferTwo, bufferMode, diplayMode, calcMode, zeroNum, equalIsPressed, acMode, isDot, bufferM}) => {
    return(
        <div>
            <h5>{'bufferOne : ' + bufferOne.toString()}</h5>
            <h5>{'bufferTwo : ' + bufferTwo.toString()}</h5>
            <h5>{'bufferMode : ' + bufferMode.toString()}</h5>
            <h5>{'diplayMode : ' + diplayMode.toString()}</h5>
            <h5>{'calcMode : ' + calcMode.toString()}</h5>
            <h5>{'zeroNum : ' + zeroNum.toString()}</h5>
            <h5>{'equalIsPressed : ' + equalIsPressed.toString()}</h5>
            <h5>{'acMode : ' + acMode.toString()}</h5>
            <h5>{'isDot : ' + isDot.toString()}</h5>
            <h5>{'bufferM : ' + bufferM.toString()}</h5>
        </div>
    );
}

export default DebugBoard;