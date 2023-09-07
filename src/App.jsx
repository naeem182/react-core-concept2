import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'

function App() {
  //return er baire fun
  function handleClick() {
    alert('button clicked');
  }
  //arrow function
  const handleclick2 = () => {
    alert('button click 2')
  }
  //parametarize function
  function Addtofive(num) {
    alert(num + 5)
  }

  return (
    <>

      <h3> React core concepts 2</h3>

      <Counter></Counter>

      {/* By function */}
      <button onClick={handleClick}>click me</button>
      {/* By arrow function */}
      <button onClick={handleclick2}>click 2</button>
      {/* direct write function */}
      <button onClick={() => alert('button third clicked')}>button third</button>
      {/* //pass parameter in fun by arrow function */}
      <button onClick={() => Addtofive(3)}>pass parameter in fun by arrow function</button>



    </>
  )
}

export default App
