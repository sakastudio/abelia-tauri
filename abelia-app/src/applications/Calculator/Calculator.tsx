import React, { useState } from 'react';
import type { ApplicationProps } from '../../types/Application';
import './Calculator.css';

export const Calculator: React.FC<ApplicationProps> = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForNewValue, setWaitingForNewValue] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForNewValue) {
      setDisplay(num);
      setWaitingForNewValue(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForNewValue) {
      setDisplay('0.');
      setWaitingForNewValue(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForNewValue(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(display);
    } else if (operation) {
      const currentValue = previousValue || '0';
      const newValue = calculate(parseFloat(currentValue), inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(String(newValue));
    }

    setWaitingForNewValue(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '*':
        return firstValue * secondValue;
      case '/':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  return (
    <div className="calculator">
      <div className="calculator-display">{display}</div>
      <div className="calculator-buttons">
        <button className="calculator-button span-2" onClick={clear}>
          Clear
        </button>
        <button className="calculator-button" onClick={() => performOperation('/')}>
          ÷
        </button>
        <button className="calculator-button" onClick={() => performOperation('*')}>
          ×
        </button>
        
        <button className="calculator-button" onClick={() => inputNumber('7')}>
          7
        </button>
        <button className="calculator-button" onClick={() => inputNumber('8')}>
          8
        </button>
        <button className="calculator-button" onClick={() => inputNumber('9')}>
          9
        </button>
        <button className="calculator-button" onClick={() => performOperation('-')}>
          −
        </button>
        
        <button className="calculator-button" onClick={() => inputNumber('4')}>
          4
        </button>
        <button className="calculator-button" onClick={() => inputNumber('5')}>
          5
        </button>
        <button className="calculator-button" onClick={() => inputNumber('6')}>
          6
        </button>
        <button className="calculator-button" onClick={() => performOperation('+')}>
          +
        </button>
        
        <button className="calculator-button" onClick={() => inputNumber('1')}>
          1
        </button>
        <button className="calculator-button" onClick={() => inputNumber('2')}>
          2
        </button>
        <button className="calculator-button" onClick={() => inputNumber('3')}>
          3
        </button>
        <button className="calculator-button span-2-height" onClick={() => performOperation('=')}>
          =
        </button>
        
        <button className="calculator-button span-2" onClick={() => inputNumber('0')}>
          0
        </button>
        <button className="calculator-button" onClick={inputDecimal}>
          .
        </button>
      </div>
    </div>
  );
};