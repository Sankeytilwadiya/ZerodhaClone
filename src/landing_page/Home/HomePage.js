import React from 'react'
import Hero from './Hero';
import Award from './Award';
import Stats from './Stats';
import Pricing from './Pricing';
import Education from './Educated';
import OpenAccount from '../OpenAccount';
// import Navbar from '../Navbar';
// import Footer from '../Footer';
function HomePage () {
    return ( <>
    {/* <Navbar/> */}
    <Hero/>
    <Award/>
    <Stats/>
    <Pricing/>
    <Education/>
    <OpenAccount/>
    {/* <Footer/> */}

    </> );
}


export default HomePage ;
