import React, { useState } from 'react';
import './index.css';

const Calc = () => {

    const[input, setInput] = useState("")


    const handleClear = ()=> {

        setInput("")
     
    
    }


      const handleClick = (value)=> {
        
        setInput(prev => (
            prev + value))
    }

      const handleDelete = ()=> {
        
        setInput( prev => ( prev.slice(0, -1)))
    }

      const handleEvaluate = ()=> {

        setInput( eval(input))
        
    }



  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
  ];

  return (
    <div className="calculator">
      <input
        type="text"
        className="display"
        value={input}
        readOnly
      />
      <div className="buttons">
        {buttons.map((btn) => (
          <button
            key={btn}
            className="button"
            onClick={() => btn === '=' ? handleEvaluate() : handleClick(btn)}
          >
            {btn}
          </button>
        ))}
        <button
          className="button clear"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="button delete"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Calc;
