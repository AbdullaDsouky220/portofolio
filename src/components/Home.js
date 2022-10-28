import React from 'react';
import {Link} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Hero from './Hero';
import Navbar from './Navbar';
import Social from './Social';
import Work from './Work';
function Home () {
  return (
    <div className="bg-secondary h-[100vh] md:container md:m-auto flex flex-col gap-8">
  <Navbar />
  <Hero />
  <About />
  <Work/>
  <Contact/>
  <Social/>
    </div>
  );
}

export default Home;
