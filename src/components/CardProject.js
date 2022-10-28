import { motion } from 'framer-motion'
import React from 'react'
import {FiExternalLink ,} from 'react-icons/fi'
import {Link} from 'react-router-dom'
function CardProject() {
  return (
    <motion.div 
    whileHover={{
      y:-20
    }}
    className='bg-success text-slate-300 p-4  rounded grid max-w-[400px] gap-6 mx-auto'>
    <div  className='flex justify-between text-2xl'>
        <FiExternalLink className="hover:text-white cursor-pointer transition" />
        <FiExternalLink className="hover:text-white cursor-pointer transition" />

        </div>
        <p className='text-2xl font-bold cursor-pointer hover:text-primary'>
          <Link to='project'>
          Intergration gAlgolia Search with worldpress mulisilite
          </Link>
        </p>
        <p>
        Intergration gAlgolia Search with worldpress mulisilite

        </p>
        <p className=" text-slate-500 flex gap-4 text-mono">
          <span>
            Vs Code
          </span>
          <span>
            React
          </span>
        </p>
    </motion.div>
    
  )
}

export default CardProject
