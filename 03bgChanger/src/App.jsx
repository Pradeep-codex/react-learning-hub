import './App.css'
import React,{useState} from "react";
import ClrButton from './components/clrButton';

function App() {
  const [bgColor,setBgColor] = useState('black')
  return (
    <>
      <div className="flex justify-center items-center h-screen w-screen overflow-hidden">
        <div style={{backgroundColor:bgColor}} className=" h-full w-full flex flex-col justify-end items-center">
          <div className="h-20 w-[80%] bg-white rounded-3xl flex justify-center items-center gap-12">
            <ClrButton name='Green' colour='Green' onSelect={setBgColor}/>
            <ClrButton name='Blue' colour='Blue' onSelect={setBgColor}/>
            <ClrButton name='Pink' colour='Pink' onSelect={setBgColor}/>
            <ClrButton name='black' colour='black' onSelect={setBgColor}/>
            <ClrButton name='gray' colour='gray' onSelect={setBgColor}/>
            <ClrButton name='purple' colour='purple' onSelect={setBgColor}/>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default App
