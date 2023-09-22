import React from 'react';
import '../../App.css';
import PageHero from '../PageHero';
import Faqs from '../Faqs';
import ContactUs from '../ContactUs';
import Projects from '../Projects';


function Portfolio() {
  return (
    <>
      <PageHero title = 'Portfolio' />
      <Projects />
      <Faqs />
      <ContactUs />
    </>
  );
}

export default Portfolio;
