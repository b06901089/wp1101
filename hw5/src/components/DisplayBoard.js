import React from "react";
import "./css/DisplayBoard.css";

const DisplayBoard = ({bufferOne, bufferTwo, diplayMode, zeroNum, sciNot}) => {

    var str = '0';
    var y_1 = parseFloat(bufferOne).toPrecision(12);
    var y_2 = parseFloat(bufferTwo).toPrecision(12);

    const SciNotConvert = (x) => {
        var neg = 0;
        var shift = 0;
        console.log(x);
        if(x == 0) return {x, shift};
        if(x < 0) {
            x = -1 * x;
            neg = 1;
        }
        while(x >= 10) {
            x = x / 10;
            shift += 1;
        }
        while(x > 0 && x < 1) {
            x = x * 10;
            shift -= 1;
            console.log(x);
        }
        if(neg) x = -1 * x;
        return {x, shift};
    }

    var ys_1 = SciNotConvert(y_1);
    var ys_2 = SciNotConvert(y_2);

    var yss_1 = ys_1.x.toString() + ' * ' + '10^' + ys_1.shift.toString();
    var yss_2 = ys_2.x.toString() + ' * ' + '10^' + ys_2.shift.toString();

    return(
        <div className='displayboard'>
            {(!diplayMode) ? (
                <div>{(!sciNot) ? (y_1.toString()) : (yss_1)}</div>
            ) : (
                <div>{(!sciNot) ? (y_2.toString()) : (yss_2)}</div>
            )}
        </div>
    );
}

export default DisplayBoard;