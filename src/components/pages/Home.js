import React from 'react';
import '../../App.css';
import Herosec from '../herosec';
import FeatureCards from '../FeatureCards'
import WhoWeAre from '../WhoWeAre';
import FSlider from '../FSlider';


function Home() {
  return (
    <>
      <Herosec />
      <FeatureCards />
      <WhoWeAre />
      <FSlider />
    </>
  );
}

export default Home;
