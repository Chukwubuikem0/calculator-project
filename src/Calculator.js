import React from "react";
import './Calculator.css';
import { useState } from "react";

function Chuks (){
    const [calc, setCalc] = useState("");
    const [result, setResult] = useState("")

    const opt = ['/', '*', '+', '-', '.'];

    const updateCalc = value => {
        if (
            opt.includes(value) && calc === '' ||
            opt.includes(value) && opt.includes(calc.slice(-1)
            )
        ) {
            return;
        }

        setCalc(calc + value);

        if(!opt.includes(value)){
            setResult(eval(calc + value).toString());
        }
    }
    const createDigits = () =>{
        const digits = [];
        for (let i=1; i < 10; i++){
            digits.push(
                <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
            )
        }
        return digits;
    }

    const calculate = () => {
        setCalc(eval(calc).toString());
    }

    const deleteLast = () => {
        if (calc == '') {
            return;
        }

        const value = calc.slice(0, -1);
        setCalc(value);
    }
    return(
        <div className="container">
            <div className="calculator">
               <div className="display">
               {result ? <span >({result})</span> : ''}
                {calc || "0"}
                </div>

                <div className="operators">
                    <button onClick={() => updateCalc('/')}>/</button>
                    <button onClick={() => updateCalc('*')}>*</button>
                    <button onClick={() => updateCalc('+')}>+</button>
                    <button onClick={() => updateCalc('-')}>-</button>
                    
                    <button onClick={deleteLast}>DEL</button>
                    </div>

                    <div className="digits">
                        {createDigits()}
                        <button onClick={() => updateCalc('0')}>0</button>
                        <button onClick={() => updateCalc('.')}>.</button>

                        <button onClick={calculate}>=</button>
                        </div> 
            </div>
        </div>
    )
}

export default Chuks;