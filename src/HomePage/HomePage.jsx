import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Footer from '../components/Footer';
import FreeBook from '../components/FreeBook';

function Home() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <div className='pb-5'>
       <FreeBook/>
    </div>
    <Footer/>
    
    </>
  )
}

export default Home
