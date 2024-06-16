import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';
import { Loader } from './components/Example';
import dad from './dad.jpg'

function App() {
  const [visible, setVisible] = useState(false)

  const handleClick = ()=>{
    setTimeout(()=>{
      setVisible(true)
    }, 2000)
  }
  return (
    <div className="flex flex-col justify-center backdrop-blur-md bg-custom-gradient h-screen">
      <Button name="Click it" icon="🧔‍♂️" handler={()=>handleClick()}/>
      { !visible ? <div className='mx-auto mt-[6em]'><Loader/></div> :
      (<div className='p-[2em] bg-[#219C90] text-2xl font-serif mx-auto rounded mt-[4em]' >
        <h1 className='text-center font-bold font-serif text-2xl text-[#F7F9F2]'>Happy Father's day</h1>
        <p className='text-center font-bold font-serif text-2xl text-[#FFC700]'>Daddy</p>
        <img src={dad} className='mx-auto w-[70%] mt-[1em] rounded' alt='pic'/>
      </div>)
      }
      
    </div>
  );
}

export default App;
