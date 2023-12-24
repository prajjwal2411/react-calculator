import './App.css';
import { useState } from 'react';

function App() {

  const [ numericalString, setNumericalString ] = useState('');

  function handleClick(event) {
    let value = event.target.value;
    switch(value){
      case '=':
        let ans;
        try{
          ans = eval(numericalString)
        } catch {
          ans = 'Math Error';
          setNumericalString('Math Error');
        } finally {
          setNumericalString(ans.toString());
        }
        break;
      case 'delete':
        setNumericalString(numericalString.substring(0, numericalString.length-1));
        break;
      case 'clear':
        setNumericalString('');
        break;
      default:
        setNumericalString(numericalString+value);
    }
  }

  return (
    <>
      <h1>Calculator App</h1>
      {/** Calculation Screen */}
      <input type="text" readOnly value={numericalString}/>
      
      {/** Number Pad */}
      <div>
        <button onClick={event => handleClick(event)} value={9}>9</button>
        <button onClick={event => handleClick(event)} value={8}>8</button>
        <button onClick={event => handleClick(event)} value={7}>7</button>
      </div>
      <div>
        <button onClick={event => handleClick(event)} value={6}>6</button>
        <button onClick={event => handleClick(event)} value={5}>5</button>
        <button onClick={event => handleClick(event)} value={4}>4</button>
      </div>
      <div>
        <button onClick={event => handleClick(event)} value={3}>3</button>
        <button onClick={event => handleClick(event)} value={2}>2</button>
        <button onClick={event => handleClick(event)} value={1}>1</button>
      </div>
      <div>
        <button onClick={event => handleClick(event)} value={'.'}>.</button>
        <button onClick={event => handleClick(event)} value={0}>0</button>
      </div>
      <div>
        <button onClick={event => handleClick(event)} value={'+'}>+</button>
        <button onClick={event => handleClick(event)} value={'-'}>-</button>
        <button onClick={event => handleClick(event)} value={'*'}>*</button>
        <button onClick={event => handleClick(event)} value={'/'}>/</button>
      </div>
      <div>
        <button onClick={event => handleClick(event)} value={'='}>=</button>
        <button onClick={event => handleClick(event)} value={'delete'}>Delete</button>
        <button onClick={event => handleClick(event)} value={'clear'}>Clear</button>
      </div>
    </>
  );
}

export default App;
