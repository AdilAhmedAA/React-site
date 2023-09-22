import React from 'react';
import '../../App.css';
import PageHero from '../PageHero';
import Faqs from '../Faqs';
import ContactUs from '../ContactUs';
import FSlider from '../FSlider';


function Blog() {
  return (
    <>
      <PageHero title = 'Blog' />
      <FSlider />
      <Faqs />
      <ContactUs />
    </>
  );
}

export default Blog;
