import React from 'react'
import { Link } from 'react-router-dom'
import {motion} from 'framer-motion'
function Hero() {
  const divVariant={
    hidden:{
      opacity:0,
      scale:0
    },
    show:{
      opacity:1,  
      transitoin:{
        duration:3
      },
      scale:1
    }
  }
  return (
    <motion.div 
    variants={divVariant}
    initial='hidden'
    animate='show'
    className='text-white flex flex-col gap-6 font-fira px-6  md:px-12 '>
        <p className='text-primary font-mono'>
            Hi , my name is 
        </p>
      <p className='text-5xl font-semibold lg:text-7xl text-slate-300 md:text-6xl'>
        Abdullah Dsouky
      </p>
      <p className='text-5xl md:text-6xl lg:text-7xl text-slate-400'>
      I build things for the web.
      </p>
      <p className='text-slate-500 leading-[30px] max-w-[550px] '>
      I’m a Front End Developer specializing 
      in building (and occasionally designing) 
      exceptional digital experiences. Currently,
       I’m focused on building accessible, 
       Website for Clients at 
       <Link className='mx-2 text-primary' to='https://www.upwork.com/freelancers/abdullahdsouky'>
       UpWork.
       </Link>
      </p>
      <p className='btn max-w-fit cursor-pointer' onClick={()=>    window.open('mailto:abdodsouky0@gmail.com?subject=Subject&body=Body%20goes%20here')
}>
       Say Hello 🤗🤗
               
      </p>
    </motion.div>
  )
}

export default Hero
