import React from 'react';
import {FiGithub, FiExternalLink} from 'react-icons/fi';
import {Link} from 'react-router-dom';
import thunder from '../assets/thunder.PNG';
import landing1  from '../assets/landing1.PNG';
import landing2  from '../assets/landing2.PNG';
import landing3  from '../assets/landing3.PNG';
import landing4  from '../assets/landing4.PNG';
import landing5  from '../assets/landing5.PNG';
import landing6  from '../assets/landing6.PNG';
import landing7  from '../assets/landing7.PNG';
import {motion, useSpring} from 'framer-motion';
import CardProject from './CardProject';
function Work () {
  const projects = [
    {
      id: 0,
      featured: true,
      name: ' Landing Page',
      description: ' landing page is a landing page for Better management include some little animation and images ',
      techno: ['React ', 'Material UI ', 'Redux ', 'React-Router'],
      link: 'http://abdullahdsouky.me/Landing-Page_materuial-ui-1/',
      repo: 'https://github.com/AbdullaDsouky220/Landing-Page_materuial-ui-1/tree/master',
      image: landing1,
    },
    {
      id: 1,
      featured: true,
      name: 'Thunder Landing Page',
      description: 'Thunder landing page is a landing page for Grow Your Business Google Ads & Instagram Ads including some little animation and images ',
      techno: ['React ', 'scss', 'sass', 'React-Router'],
      link: 'http://abdullahdsouky.me/Thunder-landing-page/',
      repo: 'https://github.com/AbdullaDsouky220/Thunder-landing-page',
      image: thunder,
    },
    {
      id: 2,
      featured: true,
      name: 'Scaler Landing Page',
      description: 'Scaler landing page is a landing page for Grow Your Business Google Ads & Instagram Ads including some little animation and slider with some amazing images ',
      techno: ['React ', 'Tailwind', 'Swiper js ', 'React-Router'],
      link: 'http://abdullahdsouky.me/AbdoLanding1/',
      repo: 'https://github.com/AbdullaDsouky220/AbdoLanding1',
      image: landing2,
    },
    {
      id: 3,
      featured: true,
      name: 'Booga Landing Page',
      description: 'Booga landing page is a landing page for Productive & Customizable For Developers including some little animation and slider with some amazing images ',
      techno: ['Scss ', 'Html ', 'Bootstrap 5 ', 'javascript'],
      link: 'http://abdullahdsouky.me/Booga-landing-page/',
      repo: 'https://github.com/AbdullaDsouky220/Booga-landing-page',
      image: landing3,
    },
    {
      id: 4,
      featured: false,
      name: 'Chirp Landing Page',
      description: 'Chirp landing page is a landing page for Twitter analytics taken to a whole newe level.',
      techno: ['Scss ', 'Html ', 'js'],
      link: 'http://abdullahdsouky.me/chirp-starter/',
      repo: 'https://github.com/AbdullaDsouky220/chirp-starter',
      image: landing4,
    },
    {
      id: 5,
      featured: false,
      name: 'Huddle Landing Page',
      description: 'Huddle landing page is a landing page for Twitter analytics taken to a whole newe level.',
      techno: ['Scss ', 'Html ', 'js'],
      link: 'http://abdullahdsouky.me/Huddle-landing-page/',
      repo: 'https://github.com/AbdullaDsouky220/chirp-starterhttps://github.com/AbdullaDsouky220/Huddle-landing-pagehttp://abdullahdsouky.me/Huddle-landing-pagehttps://github.com/AbdullaDsouky220/Huddle-landing-page',
      image: landing5,
    },
    {
      id: 6,
      featured: false,
      name: 'Bicycle Landing Page',
      description: 'Bicycle landing page is a landing page for for buying and selling Bicycles ',
      techno: ['Scss ', 'Html ', 'js'],
      link: 'http://abdullahdsouky.me/Bicycle-store/',
      repo: 'https://github.com/AbdullaDsouky220/Bicycle-store',
      image: landing6,
    },
    {
      id: 7,
      featured: false,
      name: 'Iphone project',
      description: 'Iphone project is a landing page little animation with css and html',
      techno: ['Scss ', 'Html ', 'js'],
      link: 'http://abdullahdsouky.me/iphone-project/',
      repo: 'https://github.com/AbdullaDsouky220/iphone-project',
      image: landing7,
    },
  ];
  const changeCurrentLink=(link)=>{
    window.location.href=link
  }
  const left ={
    hidden:{
      opacity:0,
     x:100,
    },
    show:{
      opacity:1,
      x:0,
      transition:{
        duration:1.4,
       type:'spring',
       stiffness: 300
      }
    },
  }
  const right ={
    hidden:{   
      opacity:0
    },
    show:{
      opacity:1,
      transition:{
        duration:1.1,
        type: "spring", stiffness: 300
      }
    },
  }
  const variant={
    offscreen: {
      y: 300
    },
    onscreen: {
      y: 50,
      rotate: -10,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8
      }
    }
  }
  return (
    <motion.div initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
      className="flex flex-col font-fira bg-secondary py-12 px-6 md:px-12 items-start gap-6  justify-between ">
      <p className="text-3xl after:h-[1px] after:absolute relative after:w-[200px] after:bg-slate-500 after:top-5 after:ml-5  ">
        <span className="text-primary mr-4">
          02.
        </span>
        <span className="text-white ">
          Some Things I’ve Built
        </span>
      </p>

      {
        projects.map((project)=>(
<motion.div 

key={project.id} 
variants={left}
initial='hidden'
whileInView='show'
className="flex relative  flex-col gap-4 bg-transparent-200  rounded z-10 py-6">
        <p className=" px-4 text-primary font-mono">Featured Project </p>
        <p className="px-4 text-white font-bold text-3xl">{project.name}</p>

        <p className="text-slate-400 font-semibold md:bg-slate-900 max-w-[500px] shadow-lg p-4 rounded">
          {
            project.description
          }

        </p>
        <p className="px-4 text-slate-500 flex gap-4 text-mono">
          {
            project.techno.map((tech)=>(
              <span key={tech}>
           {tech}
          </span>
            ))
          }
         
        </p>
        <div className="px-4 flex gap-4 text-2xl text-white ">
          <Link onClick={()=>changeCurrentLink(project.repo)} to='/'>

          <FiGithub className="hover:text-primary z-20 cursor-pointer transition" />
          </Link>
          <Link to='/' onClick={()=>changeCurrentLink(project.link)}>
            <FiExternalLink className="hover:text-primary cursor-pointer transition" />
          </Link>
        </div>
        <motion.div 
       
        className="h-[100%] w-[100%]  absolute  bg-transparent-200 md:left-[50%] md:w-[85%] -z-10  md:opacity-100 opacity-10 cursor-pointer lg:left-[100%] ">
          <img src={project.image} className="" alt="project  photos " />
        </motion.div>
        <motion.div
          whileHover={{opacity: 0}}
         
          className="  cursor-pointer min-h-[290px]  w-[100%] absolute bg-primary opacity-20 md:left-[50%] hidden md:flex md:w-[85%]  lg:left-[100%] -z-10 "
        />
      </motion.div>
        ))
      }

      {/* <p className="text-3xl after:h-[1px] after:absolute relative after:w-[200px] after:bg-slate-500 after:top-5 after:ml-5 after:hidden ">
        <span className="text-primary mr-4">
          03.
        </span>
        <span className="text-white ">
        Other Noteworthy Projects
        </span>
      </p> */}
    <div>
      {/* when you have alot of amazing website use it */}
    {/* <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center'>
        <CardProject/>
        <CardProject/>
        <CardProject/>
        <CardProject/>
    </div> */}
    </div>

    </motion.div>
  );
}

export default Work;
