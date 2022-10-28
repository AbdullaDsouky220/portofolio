import React from 'react'
import {SiUpwork} from 'react-icons/si'
import {BsWhatsapp} from 'react-icons/bs'
import {FiGithub ,FiLinkedin,FiFacebook,FiInstagram} from 'react-icons/fi'
import { Link } from 'react-router-dom'
function Social() {
    const changeCurrentLink=(link)=>{
        window.location.href=link
      }
     
  return (
    <div className='h-[250px] w-[40px]  text-white fixed top-[230px] py-4  flex-col hidden md:flex gap-6 px-1 rounded items-center'>
<Link to='/' target='_blank' onClick={()=>changeCurrentLink('https://github.com/AbdullaDsouky220/Thunder-landing-page/deployments/activity_log?environment=github-pages')}>
<FiGithub className="hover:text-primary h-[20px] w-[20px]  cursor-pointer transition" />
    </Link>       
<Link to='/' target='_blank' onClick={()=>changeCurrentLink('https://www.linkedin.com/in/abdullah-dsouky-9b84031bb/')}>
<FiLinkedin className="hover:text-primary h-[20px] w-[20px]  cursor-pointer transition" />
    </Link>       
<Link to='/' target='_blank' onClick={()=>changeCurrentLink('https://www.facebook.com/profile.php?id=100081337302849')}>
<FiFacebook className="hover:text-primary h-[20px] w-[20px]  cursor-pointer transition" />
    </Link>       
<Link to='/' target='_blank' onClick={()=>changeCurrentLink('https://www.instagram.com/abdullah_dsouky/')}>
<FiInstagram className="hover:text-primary h-[20px] w-[20px]  cursor-pointer transition" />
    </Link>       
<Link to='/' target='_blank' onClick={()=>changeCurrentLink('https://api.whatsapp.com/send?phone=201144254129&text=Hello,%20more%20information!')}>
<BsWhatsapp className="hover:text-primary h-[20px] w-[20px]  cursor-pointer transition" />
    </Link>       
<Link to='/' target='_blank' onClick={()=>changeCurrentLink('https://www.upwork.com/freelancers/~014951c422cb53aaf1')}>
<SiUpwork className="hover:text-primary h-[20px] w-[20px]  cursor-pointer transition" />
    </Link>       
    </div>
  )
}

export default Social
