import CalcBoard from "../components/CalcBoard";
import DisplayBoard from "../components/DisplayBoard";
import DebugBoard from "../components/DebugBoard";
import React from "react";
import { useState } from 'react';
import "./Calculator.css";

const Calculator = () => {

    const [bufferOne, setBufferOne] = useState(0);
    const [bufferTwo, setBufferTwo] = useState(0);
    const [bufferMode, setBufferMode] = useState(0);
    const [diplayMode, setDiplayMode] = useState(0);
    const [calcMode, setCalcMode] = useState(0);
    const [zeroNum, setZeroNum] = useState(0);
    const [equalIsPressed, setEqualIsPressed] = useState(0);
    const [acMode, setAcMode] = useState(0);
    const [isDot, setIsDot] = useState(0);
    const [sciNot, setSciNot] = useState(0);
    const [bufferM, setBufferM] = useState(0);

    const countDecimals = (value) => {
        if(Math.floor(value) === value) return 0;
        var str = value.toString();
        if(str.includes('.')) return str.split('.')[1].length;
        return 0;
    }

    const pushNumberBack = (buffer, add, which) => {
        if(Number.isInteger(buffer) && !isDot) {
            if(buffer >= 0) {
                (!which) ? (setBufferOne(buffer*10 + add)) : (setBufferTwo(buffer*10 + add));
            }
            else {
                (!which) ? (setBufferOne(buffer*10 - add)) : (setBufferTwo(buffer*10 - add));
            }
        }
        else {
            let y = countDecimals(buffer);
            console.log(y);
            if(y < 15) {
                if(buffer >= 0) {
                    let float = buffer + add * Math.pow(0.1, y+1+zeroNum);
                    let round = Math.round(float * Math.pow(10, 10)) / Math.pow(10, 10);
                    (!which) ? (setBufferOne(round)) : (setBufferTwo(round));
                    setZeroNum(0);
                }
                else {
                    let float = buffer - add * Math.pow(0.1, y+1+zeroNum);
                    let round = Math.round(float * Math.pow(10, 10)) / Math.pow(10, 10);
                    (!which) ? (setBufferOne(round)) : (setBufferTwo(round));
                    setZeroNum(0);
                }
                if(add === 0) {
                    setZeroNum(zeroNum + 1);
                }
            }
        }
    }

    const bufferOneOnChange = (e) => {
        setAcMode(1);
        setEqualIsPressed(0);
        pushNumberBack(bufferOne, e, 0);
    }
  
    const bufferTwoOnChange = (e) => {
        setAcMode(1);
        setEqualIsPressed(0);
        pushNumberBack(bufferTwo, e, 1);
        if(diplayMode !== 1) setDiplayMode(1);
    }
  
    const diplayModeOneOnChange = (e) => {
        setDiplayMode(e);
    }
  
    const pressEqual = (r) => {
        if(calcMode === 0) {
            setBufferOne(bufferOne + bufferTwo);
        }
        else if(calcMode === 1) {
            setBufferOne(bufferOne - bufferTwo);
        }
        else if(calcMode === 2) {
            setBufferOne(bufferOne * bufferTwo);
        }
        else if(calcMode === 3) {
            if(bufferTwo === 0) {
                alert('Invalid Operation: Divide by 0');
            }
            else setBufferOne(bufferOne / bufferTwo);
        }
        setDiplayMode(0);
        setBufferMode(0);
        if(r) setEqualIsPressed(1);
    }

    const claculateResult = (e) => {
        if(e === '+') {
            if(!equalIsPressed) pressEqual(0);
            setCalcMode(0);
            setBufferMode(1);
            setBufferTwo(0);
        }
        else if(e === '-') {
            if(!equalIsPressed) pressEqual(0);
            setCalcMode(1);
            setBufferMode(1);
            setBufferTwo(0);
        }
        else if(e === '*') {
            if(!equalIsPressed) pressEqual(0);
            setCalcMode(2);
            setBufferMode(1);
            setBufferTwo(0);
        }
        else if(e === '/') {
            if(!equalIsPressed) pressEqual(0);
            setCalcMode(3);
            setBufferMode(1);
            setBufferTwo(0);
        }
        else if(e === '=') {
            pressEqual(1);
        }
        else if(e === 'x^2') {
            (!diplayMode) ? (setBufferOne(bufferOne * bufferOne)) : (setBufferTwo(bufferTwo * bufferTwo));
        }
        else if(e === 'e^x') {
            (!diplayMode) ? (setBufferOne(Math.exp(bufferOne))) : (setBufferTwo(Math.pow(bufferTwo)));
        }
        else if(e === 'ln') {
            (!diplayMode) ? (setBufferOne(Math.log(bufferOne))) : (setBufferTwo(Math.pow(bufferTwo)));
        }
        setIsDot(0);
    }

    const PressAc = () => {
        if(!acMode) {
            setBufferOne(0);
            setBufferTwo(0);
            setBufferMode(0);
            setDiplayMode(0);
            setCalcMode(0);
            setZeroNum(0);
            setEqualIsPressed(0);
            setIsDot(0);
        }
        else {
            if(!bufferMode) setBufferOne(0);
            else setBufferTwo(0);
            setZeroNum(0);
            setAcMode(0);
            setIsDot(0);
        }
    }

    const PressDot = () => {
        setIsDot(1);
    }

    const PressSci = () => {
        setSciNot(!sciNot);
    }

    const PressM = (e) => {
        if(e === 'M+') {
            setBufferM(bufferM + ((!diplayMode) ? (bufferOne) : (bufferTwo)));
        }
        else if(e === 'M-') {
            setBufferM(bufferM - ((!diplayMode) ? (bufferOne) : (bufferTwo)));
        }
        else if(e === 'MR') {
            if(!diplayMode) setBufferOne(bufferM);
            else setBufferTwo(bufferM);
        }
        else if(e === 'MC') {
            setBufferM(0);
        }
    }

    return (
        <div className='calculator'>
            <DisplayBoard
                bufferOne={bufferOne}
                bufferTwo={bufferTwo}
                diplayMode={diplayMode}
                zeroNum={zeroNum}
                sciNot={sciNot}
            ></DisplayBoard>
            <CalcBoard
                bufferOneOnChange={bufferOneOnChange}
                bufferTwoOnChange={bufferTwoOnChange}
                diplayModeOneOnChange={diplayModeOneOnChange}
                diplayMode={diplayMode}
                bufferMode={bufferMode}
                claculateResult={claculateResult}
                PressAc={PressAc}
                acMode={acMode}
                PressDot={PressDot}
                PressSci={PressSci}
                PressM={PressM}
            ></CalcBoard>
            {/* <DebugBoard
                bufferOne={bufferOne}
                bufferTwo={bufferTwo}
                bufferMode={bufferMode}
                diplayMode={diplayMode}
                calcMode={calcMode}
                zeroNum={zeroNum}
                equalIsPressed={equalIsPressed}
                acMode={acMode}
                isDot={isDot}
                bufferM={bufferM}
            ></DebugBoard> */}
        </div>
    );
}

export default Calculator;