import React, { useEffect, useState } from 'react';
import './App.css';


function App() {
  const operators = ["*", "/", "+", "-"];
  const [currentInput, setCurrentInput] = useState("0");
  const [formula, setFormula] = useState("");
  const [calculationData, setCalculationData] = useState("");
  
  const handleDecimal = () => {
    const lastChar = calculationData.charAt(calculationData.length - 1);
    if (!calculationData.length) {
      setCurrentInput("0.");
      setCalculationData("0.");
      setFormula("0.");
    } else {
      if (operators.includes(lastChar)) {
        setCurrentInput("0.");
        setCalculationData(calculationData + "0.");
        setFormula(formula + " " + "0.");
      } else {
        if (lastChar === "." || currentInput.includes(".")) {
        } else {
          setCurrentInput(currentInput + ".");
          setCalculationData(calculationData + ".");
          setFormula(formula + ".");
        }
      }
    }
  };

  const handleNumber = (value) => {
   
    if (!calculationData.length) {
      setCalculationData(value);
      setFormula(value);
      setCurrentInput(value);
    } else {
      if (value === "0" && (calculationData === "0" || currentInput === "0")) {
      } else {
        const lastChar = calculationData.charAt(calculationData.length - 1);
        const isOperator = operators.includes(lastChar);
        if (isOperator) {
          setCurrentInput(value);
          setFormula(formula + " " + value);
        } else {
          setCurrentInput(currentInput + value);
          setFormula(formula + value);
        }

        setCalculationData(calculationData + value);
      }
    }
  
  };

  const handleOperator =  (value) => {
    console.log(calculationData)
    if (String(calculationData).length) {
      setCurrentInput(value);

      const lastChar = String(calculationData).charAt(calculationData.length - 1);
      const secondLastChar = String(calculationData).charAt(calculationData.length - 2);
      const lastCharisOp = operators.includes(lastChar);
      const secondLastCharisOp = operators.includes(secondLastChar);
      if (
        lastCharisOp &&
        value !== "-" ||
        (lastCharisOp && secondLastCharisOp)
      ) {
        if (secondLastCharisOp) {
          setCalculationData(
            calculationData.substring(0, calculationData.length - 2) + value
          );
        } else {
          setCalculationData(
            calculationData.substring(0, calculationData.length - 1) + value
          );
        }
      } else {
        setCalculationData(calculationData + value);
        setFormula(formula + " " + value);
      }
    }

  };

  const handleClear = () => {
    
    setCalculationData("");
    
    setCurrentInput("0");

    
  };

  const handleEquation = () => {

    const result = eval(calculationData);
   
    setFormula(result);
    setCurrentInput(result);
    setCalculationData(result);
 
  };

  return (
    <div className="App">
      <div className='calculator'>
        <div className='row'>
          <div className='formula' >{formula}</div>
          <div id="display" style={{color:"white"}}>{currentInput}</div>
        </div>

        <div id="buttons">
        <button className={"button"} id='clear' value={"AC"} onClick={() => handleClear("AC")}>AC</button>
        <button className={"button"} id='divide' value={"/"} onClick={() => handleOperator("/")}>/</button>
        <button className={"button"} id='multiply' value={"*"} onClick={() => handleOperator("*")}>*</button>
        <button className={"button"} id='seven' value={"7"} onClick={() => handleNumber("7")}>7</button>
        <button className={"button"} id='eight' value={"8"} onClick={() => handleNumber("8")}>8</button>
        <button className= {"button"} id='nine' value={"9"} onClick={() => handleNumber("9")}>9</button>
        <button className={"button"} id='subtract' value={"-"} onClick={() => handleOperator("-")}>-</button>
        <button className={"button"} id='four' value={"4"} onClick={() => handleNumber("4")}>4</button>
        <button className={"button"} id='five' value={"5"} onClick={() => handleNumber("5")}>5</button>
        <button className={"button"} id='six' value={"6"} onClick={() => handleNumber("6")}>6</button>
        <button className={"button"} id='add' value={"+"} onClick={() => handleOperator("+")}>+</button>
          <button className={"button"} id='one' value={"1"} onClick={() => handleNumber("1")}>1</button>
          <button className={"button"} id='two' value={"2"} onClick={() => handleNumber("2")}>2</button>
          <button className={"button"} id='three' value={"3"} onClick={() => handleNumber("3")}>3</button>
          <button className={"button"} id='zero' value={"0"} onClick={() => handleNumber("0")}>0</button>
          <button className={"button"} id='equals' value={"="} onClick={() => handleEquation("=")}>=</button>
          <button className={"button"} id='decimal' value={"."} onClick={() => handleDecimal(".")}>.</button>
        

        </div>
      </div>
    </div>
  );
}

export default App;
