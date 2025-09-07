import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCounter] = useState(10)
  const msg = document.getElementById("message")
const addValue = ()=>{
  if(count<20)
  {
    count+=1
  setCounter(count)
  }
  else{
    msg.innerHTML="Cannot increase above 20"
  }
}
const removeValue = ()=>{
 if(count>0)
 {
   count-=1
  setCounter(count)
 }
 else{
    msg.innerHTML="Cannot decrase below 0"
  }
}

  return (
    <>
   <h1>COUNTER</h1>
   <h2>Counter Value {count}</h2>
   <button onClick={addValue}>Increase</button>
   <button onClick={removeValue}>Decrease</button>
   <p id='message'></p>
    </>
  )
}

export default App
