import React from 'react';
import About from '../components/About';
import Contact from '../components/Contact';
import HeroPage from '../components/HeroPage';
import HowWork from '../components/HowWork';
import Footer from "../components/Footer"
import Service from '../components/Service';
import Testimonail from '../components/Testimonail';

const Landingpage = () => {
  return (
    <div style={{ width: '100%', marginTop:"80px", backgroundColor:"white"}}>
      <HeroPage />;
      <HowWork />
      <About />
      <Service />
      <Testimonail />
      <Contact />
      <Footer/>
    </div>
  );
};

export default Landingpage;
