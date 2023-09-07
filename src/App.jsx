import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //return er baire
  function handleClick() {
    alert('button clicked');
  }

  return (
    <>

      <h3> React core concepts 2</h3>
      <button onClick={handleClick}>click me</button>


    </>
  )
}

export default App
