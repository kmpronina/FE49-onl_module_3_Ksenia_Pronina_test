import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './ui/button/button';

function App() {
  const onClick = () => {
    console.log('clicked');
  };
  return <Button onClick={onClick}>OK</Button>;
}

export default App;
