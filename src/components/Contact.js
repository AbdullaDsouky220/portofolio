import React from 'react';

function Contact () {
  return (
    <div className="flex flex-col gap-4 items-center py-16 ">
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
    </div>
  );
}

export default Contact;
