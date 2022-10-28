import React from 'react'
import { Link } from 'react-router-dom'

function NavList() {
  return (
    <ul className={`hidden md:flex    gap-5 flex-col md:flex-row items-center font-mono`}>
    <li>
      <span className='mr-1 text-primary '>
        01.
        </span>
     <Link to='#about' className="hover:text-primary transitions">
     About 
     </Link>
    </li>
    <li>
      <span className='mr-1 text-primary '>
        02.
        </span>
     <Link to='#experience' className="hover:text-primary transitions">
     experience 
     </Link>
    </li>
    <li>
      <span className='mr-1 text-primary '>
        03.
        </span>
     <Link to='#work' className="hover:text-primary transitions">
     Work
     </Link>
    </li>
    <li>
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
  </ul>
  )
}

export default NavList
