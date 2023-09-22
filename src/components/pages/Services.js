import React from 'react';
import '../../App.css';
import PageHero from '../PageHero';
import FeatureCards from '../FeatureCards'
import Faqs from '../Faqs';
import ContactUs from '../ContactUs';


function Services() {
  return (
    <>
      <PageHero title = 'Services' />
      <FeatureCards />
      <Faqs />
      <ContactUs />
    </>
  );
}

export default Services;
