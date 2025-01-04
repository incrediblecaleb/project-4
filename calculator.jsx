

jsx
import React, { useState } from 'react';

function App() {
  const [display, setDisplay] = useState('0');
  const [expression, setExpression] = useState('');
  const [operators, setOperators] = useState(['+', '-', '*', '/']);
  const [decimal, setDecimal] = useState(false);

  const handleNumberClick = (number) => {
    if (display === '0' && number !== '0') {
      setDisplay(number);
    } else if (display !== '0' || number !== '0') {
      setDisplay(display + number);
    }
    setExpression(expression + number);
    setDecimal(false);
  };

  const handleOperatorClick = (operator) => {
    if (operators.includes(display[display.length - 1])) {
      setExpression(expression.slice(0, -1) + operator);
      setDisplay(operator);
    } else {
      setExpression(expression + operator);
      setDisplay(operator);
    }
    setDecimal(false);
  };

  const handleDecimalClick = () => {
    if (!decimal) {
      setDisplay(display + '.');
      setExpression(expression + '.');
      setDecimal(true);
    }
  };

  const handleClearClick = () => {
    setDisplay('0');
    setExpression('');
    setDecimal(false);
  };

  const handleEqualsClick = () => {
    try {
      const result = eval(expression);
      setDisplay(result.toString());
      setExpression(result.toString());
    } catch (error) {
      setDisplay('Error');
      setExpression('');
    }
  };

  return (
    <div id="calculator" className="container text-center">
      <h1>Calculator</h1>
      <div id="display" className="display text-center">
        {display}
      </div>
      <div className="button-row">
        <button id="clear" onClick={handleClearClick}>
          Clear
        </button>
        <button id="divide" onClick={() => handleOperatorClick('/')}>
          /
        </button>
        <button id="multiply" onClick={() => handleOperatorClick('*')}>
          *
        </button>
        <button id="subtract" onClick={() => handleOperatorClick('-')}>
          -
        </button>
        <button id="add" onClick={() => handleOperatorClick('+')}>
          +
        </button>
      </div>
      <div className="button-row">
        <button id="seven" onClick={() => handleNumberClick('7')}>
          7
        </button>
        <button id="eight" onClick={() => handleNumberClick('8')}>
          8
        </button>
        <button id="nine" onClick={() => handleNumberClick('9')}>
          9
        </button>
      </div>
      <div className="button-row">
        <button id="four" onClick={() => handleNumberClick('4')}>
          4
        </button>
        <button id="five" onClick={() => handleNumberClick('5')}>
          5
        </button>
        <button id="six" onClick={() => handleNumberClick('6')}>
          6
        </button>
      </div>
      <div className="button-row">
        <button id="one" onClick={() => handleNumberClick('1')}>
          1
        </button>
        <button id="two" onClick={() => handleNumberClick('2')}>
          2
        </button>
        <button id="three" onClick={() => handleNumberClick('3')}>
          3
        </button>
      </div>
      <div className="button-row">
        <button id="zero" onClick={() => handleNumberClick('0')}>
          0
        </button>
        <button id="decimal" onClick={handleDecimalClick}>
          .
        </button>
        <button id="equals" onClick={handleEqualsClick}>
          =
        </button>
      </div>
    </div>
  );
}

export default App;
