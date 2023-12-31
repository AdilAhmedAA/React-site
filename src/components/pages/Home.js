import React from 'react';
import '../../App.css';
import Herosec from '../herosec';
import FeatureCards from '../FeatureCards'
import WhoWeAre from '../WhoWeAre';
import FSlider from '../FSlider';
import Projects from '../Projects';
import Faqs from '../Faqs';
import ContactUs from '../ContactUs';


function Home() {
  return (
    <>
      <Herosec />
      <FeatureCards />
      <WhoWeAre />
      <FSlider />
      <Projects />
      <Faqs />
      <ContactUs />
    </>
  );
}

export default Home;
