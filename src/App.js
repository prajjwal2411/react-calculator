import './App.css';

import Display from './DisplayComponent/display';
import Keypad from './KeypadComponent/keypad';

import { useState } from 'react';

function App() {

  const [ numericalString, setNumericalString ] = useState('');

  function onButtonPress(value){
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
      case 'Delete':
        setNumericalString(numericalString.substring(0, numericalString.length-1));
        break;
      case 'Clear':
        setNumericalString('');
        break;
      default:
        setNumericalString(numericalString+value);
    }
  }

  return (
    <>
      <h1>Calculator App</h1>
      <Display expression={numericalString}/>
      <Keypad handleClick={onButtonPress}/>
    </>
  );
}

export default App;
