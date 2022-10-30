import React from 'react';
import {motion} from 'framer-motion';

function Contact () {
  const contactVariant={
    hidden:{
      x:100,

    },
    show:{
      x:0,
      duration:1.4,
      type:'spring',
      stiffness: 300
    }

  }
  return (
    
    <motion.div 
    variants={contactVariant}
    initial='hidden'
    whileInView='show'
    className="flex flex-col gap-4 items-center py-16 ">
      <p className="text-xl  relative text-primary font-mono">
        <span className="text-primary mr-4">
          04.
        </span>
        <span className="text-inherit ">
          What's Next ?
        </span>
      </p>
      <p className="text-5xl  font-bold text-white">
        Get In Touch
      </p>
      <p
        className="btn max-w-fit cursor-pointer"
        onClick={() =>
          window.open (
            'mailto:abdodsouky0@gmail.com?subject=Subject&body=Body%20goes%20here'
          )}
      >

        Say Hello 🤗🤗

      </p>
    </motion.div>
  );
}

export default Contact;
