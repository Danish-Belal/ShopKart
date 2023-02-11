import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Login from '../src/components/Login'
import SignUp from './components/Signup';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <SignUp />
    </div>
  );
}

export default App;
