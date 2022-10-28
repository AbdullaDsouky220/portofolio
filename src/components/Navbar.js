import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logoImage.PNG';
import {motion,AnimatePresence} from 'framer-motion'
import NavList from './NavList'
function Navbar() {
  const [clicked,setClicked]=useState(false)
  const spanVariant={
    hidden:{
rotate:0,
    },
    show:{
      rotate:50
    }

  }
  const spanVariant2={
    hidden:{
rotate:0,
    },
    show:{
      rotate:-50
    }

  }
  const toggleVariant={
    hidden:{
  x:'100vw'
   
    },
    show:{
      x:0
    },
    exit:{
      x:'100vw'
    }
  }
  return (
    <div className=" relative text-slate-500 flex justify-between items-center py-4 px-6 md:px-10 z-50">
      <div>
        <img  className='h-[80px]'src={logo} alt="the website logo" />
      </div>
      <motion.div 
      onClick={()=>setClicked(!clicked)} 
      className={`${clicked?'fixed right-4':null} flex flex-col gap-2 cursor-pointer z-10 md:hidden `}   >
        <motion.span variants={spanVariant}
           animate={clicked?'show':'hidden'} 
          className={`${clicked?'w-[40px]  ':'w-[40px] '} 
          flex h-[2px] w-[40px] bg-primary`} ></motion.span>
        <motion.span 
        className={`${clicked?
          'hidden':'flex'}  h-[2px] w-[30px] bg-primary`} ></motion.span>
        <motion.span variants={spanVariant2}
          animate={clicked?'show':'hidden'} 
           className={`${clicked?'w-[38px] -mt-[10px]  rotate-180':'w-[20px] rotate-0 '} flex h-[2px]  bg-primary`} ></motion.span>
    
      </motion.div>
      <AnimatePresence>
      <motion.ul 
      variants={toggleVariant} 
      animate={clicked?'show':'hidden'} 
      exit='exit' 
       className={`${clicked?'flex':'hidden'}    
       gap-5 flex-col  md:flex-row items-center font-mono  right-0  top-0 text-2xl  bg-secondary h-[100vh] w-[350px] fixed py-16 justify-center md:hidden  `}>
       
        <li className='flex flex-col  items-center gap-2'>
          <span className='mr-1 text-primary '>
            01.
            </span>
         <Link        
         to={{ pathname: "/about", hash: "#about" }}
        className="hover:text-primary transitions">
         About 
         </Link>
        </li>
        <li className='flex flex-col items-center gap-2'>
          <span className='mr-1 text-primary '>
            02.
            </span>
         <Link to='#experience' className="hover:text-primary transitions">
         experience 
         </Link>
        </li>
        <li className='flex flex-col items-center gap-2'>
          <span className='mr-1 text-primary '>
            03.
            </span>
         <Link to='#work' className="hover:text-primary transitions">
         Work
         </Link>
        </li>
        <li className='flex flex-col items-center gap-2'>
          <span className='mr-1 text-primary '>
            04.
            </span>
         <Link to='#contact' className="hover:text-primary transitions">
         Contact 
         </Link>
        </li>
        <button className='btn'>
            Resume
        </button>
      </motion.ul>

      </AnimatePresence>
      <NavList />
    </div>
  );
}

export default Navbar;
