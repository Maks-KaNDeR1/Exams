import React, { ChangeEvent, useState } from 'react'
import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <div className='wrapper' >
        <Counter />
      </div>
    </div>
  );
}


export default App;


