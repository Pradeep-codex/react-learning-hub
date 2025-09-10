import './App.css'
import Card from './components/Card'
function App() {
  

  return (
    <>
     <h3 className='bg-amber-300 p-5  text-black font-bold rounded-2xl w-[50%] text-center ml-72'>Demon Slayer</h3> 
    
    <Card cardName='Tanjiro' imgName='image.png'/>
    <Card cardName = 'Kokushiboo' imgName='koku.png'/>
    </>
  )
}

export default App
