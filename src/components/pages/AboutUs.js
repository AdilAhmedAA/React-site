import React from 'react';
import '../../App.css';
import PageHero from '../PageHero';
import Faqs from '../Faqs';
import ContactUs from '../ContactUs';
import WhoWeAre from '../WhoWeAre';


function AboutUs() {
  return (
    <>
      <PageHero title = 'AboutUs' />
      <WhoWeAre />
      <Faqs />
      <ContactUs />
    </>
  );
}

export default AboutUs;
