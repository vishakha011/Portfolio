import React, { useState, useEffect, useRef } from 'react';

import {Loader} from './loader/Loader';
import Header from './partials/NavBar/Header';
import Hero from './Hero';
import About from './About';
import Skills from './Skills';
import Work from './Work';
import Blog from './Blog';
import Contact from './ContactSection/Contact';
import Footer from './partials/Footer';

import { skillSet } from '../data';
import { Blogs } from '../data';

const Dashboard =() => {
  const [skills, setSkills] = useState([])
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const aboutSection = useRef(null);
  const workSection = useRef(null);

  const goToAboutSection = () => {
    window.scrollTo({ top: aboutSection.current.offsetTop, behavior: "smooth"})
  };

  const goToWorkSection = () => {
    window.scrollTo({ top: workSection.current.offsetTop, behavior: "smooth"})
  };


  useEffect(() => {
    setSkills(skillSet);
    setBlogs(Blogs);
    setLoading(false);
  }, []);

  if(loading) {
    return (
      <Loader />
    )
  }

  return (
      <>
        <Header/>
        <Hero 
          goToWorkSection={goToWorkSection}
          goToAboutSection={goToAboutSection}
        />
        <About aboutSection={aboutSection} />
        <Skills skills={skills}/>
        <Work 
          workSection={workSection}
          />
        <Blog blogs={blogs} />
        <Contact />
        <Footer />
      </>
  )
};

export default Dashboard;