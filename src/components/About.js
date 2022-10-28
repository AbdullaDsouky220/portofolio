import React from 'react';
import me from '../assets/pic1.jpg';
import {motion} from 'framer-motion';
function About () {
  return (
    <div id='about' className="flex font-fira bg-secondary py-12 px-6 md:px-12 items-start gap-6 flex-col justify-between md:flex-row">
      <div className="max-w-[450px] flex gap-4 flex-col">
        <p className="text-3xl after:h-[1px] after:absolute relative after:w-[200px] after:bg-slate-500 after:top-5 after:ml-5">
          <span className="text-primary mr-4">
            01.
          </span>
          <span className="text-white ">
            About Me
          </span>
        </p>
        <div className="text-slate-500 leading-[30px] flex gap-4 flex-col">
          <p>
            Hello! My name is Abdullah and
            I enjoy creating things that
            live on the internet. My interest
            in web development started back in
            2020 when I decided to learn  HTML & CSS!
          </p>
          <p>
            Fast-forward to today, and I am working as A freelancer web developer My main
            focus these days is building accessible, inclusive
            products and digital experiences at Upstatement for
            a variety of clients.
          </p>
          <p>
            Here are a few technologies I’ve been working with recently:
          </p>
          <ul className="font-mono text-slate-400 px-6 grid grid-row-3 grid-cols-2">
            <li className=" before:content-['▹']   before:w-[40px] before:text-primary  before:text-3xl  before:-left-8 before:-top-1 before:block before:h-[40px] relative before:absolute  before:h-[10px]">
              React js
            </li>
            <li className=" before:content-['▹']   before:w-[40px]    before:text-primary  before:text-3xl  before:-left-8 before:-top-1 before:block before:h-[40px] relative before:absolute  before:h-[10px]">
              JavaScript
            </li>

            <li className=" before:content-['▹']   before:w-[40px] before:text-primary  before:text-3xl  before:-left-8 before:-top-1 before:block before:h-[40px] relative before:absolute  before:h-[10px]">
              Html
            </li>
            <li className=" before:content-['▹']   before:w-[40px] before:text-primary  before:text-3xl  before:-left-8 before:-top-1 before:block before:h-[40px] relative before:absolute  before:h-[10px]">
              Node js
            </li>
            <li className=" before:content-['▹']   before:w-[40px] before:text-primary  before:text-3xl  before:-left-8 before:-top-1 before:block before:h-[40px] relative before:absolute  before:h-[10px]">
              Express js
            </li>
            <li className=" before:content-['▹']   before:w-[40px] before:text-primary  before:text-3xl  before:-left-8 before:-top-1 before:block before:h-[40px] relative before:absolute  before:h-[10px]">
              Css and Sass
            </li>
          </ul>
        </div>
      </div>
      <div className='m-auto'>
        <div className="relative ">

        <motion.div  whileHover={{x:-15,y:-15}}className="h-[100%]  rounded top-4   w-[100%] border-4   left-4 border-primary absolute  " >
            </motion.div>
          <div className='-z-10'>
          <motion.div
            whileHover={{opacity: 0}}
            className="  cursor-pointer h-[100%] w-[100%] absolute bg-primary opacity-20  "
          />
          <img
            src={me}
            className=" h-[300px]  rounded  object-cover min-w-[300px]   "
            alt="this is me the founder of the website "
          />
          </div>
         
        </div>
      </div>
    </div>
  );
}

export default About;
