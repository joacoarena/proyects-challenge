
import { useState } from 'react'
import './App.css'

function App() {

  const [host, setHost] = useState(0)
   const [guest, setGuest] = useState(0)

  const handleClick1 = (boton) =>{
if (boton === "host") {
      setHost(host + 1)
} else if (boton === "guest"){
  setGuest(guest+1)
}  
}
  const handleClick2 = (boton) =>{
    if (boton === "host") {
      setHost(host + 2)
} else if (boton === "guest"){
  setGuest(guest+2)
}  
  }
  const handleClick3 = (boton) =>{
    if (boton === "host") {
      setHost(host + 3)
} else if (boton === "guest"){
  setGuest(guest+3)
}  
  }
  return (
<>
      <div className="flex justify-evenly  items-center bg-slate-900" >
            <div>
                <h3 className='text-center text-white font-sans font-semibold text-3xl'>HOME</h3>
                <h2 className='bg-slate-800 text-9xl text-red-600 w-44 m-5 text-center'>{host}</h2>
                <div className='flex justify-center '>
                  <button className='p-2 px-3 text-white text-base border m-1 hover:bg-slate-950 hover:text-white' onClick={()=>handleClick1('host')}>+1</button>
                  <button className='p-2 px-3 text-white text-base border m-1 hover:bg-slate-950 hover:text-white' onClick={()=>handleClick2('host')}>+2</button>
                  <button className='p-2 px-3 text-white text-base border m-1 hover:bg-slate-950 hover:text-white' onClick={()=>handleClick3('host')}>+3</button>
                </div>
            </div>
            <div>
                <h3 className='text-center text-white font-sans font-semibold text-3xl'>GUEST</h3>
                <h2 className='bg-slate-800 text-9xl text-red-600 w-44 m-5 text-center'>{guest}</h2>
                <div className='flex justify-center'>
                  <button className='p-2 px-3 text-white text-base border m-1 hover:bg-slate-950 hover:text-white' onClick={()=>handleClick1('guest')}>+1</button>
                  <button className='p-2 px-3 text-white text-base border m-1 hover:bg-slate-950 hover:text-white' onClick={()=>handleClick2('guest')}>+2</button>
                  <button className='p-2 px-3 text-white text-base border m-1 hover:bg-slate-950 hover:text-white' onClick={()=>handleClick3('guest')}>+3</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
