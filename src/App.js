import { useEffect, useState } from 'react';
import logo from './assets/Abdologo.svg'
import Firstlook from './components/Firstlook';
import Home from './components/Home';
function App() {
  const [showLogo,setShowLogo]=useState(true)
  useEffect(() => {
    const timeout=setTimeout(()=>{
      setShowLogo(false)
    },4000)
  
    return () => {
      clearTimeout(timeout)
    }
  }, [])
  
  return (
    <div className=" max-h-[100vh] bg-secondary ">
      {
        showLogo?<Firstlook/>:  <Home/>
      }
   
 

    </div>
  );
}

export default App;
