import React from 'react'
import '../../App.css'
import HeroSection from '../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer'
/* import SignUp from './SignUp'
import Services from './Services'
import Products from './Products' */


function Home() {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
            {/* <Products />
            <Services />
            <SignUp /> */}
        </>
    )
}

export default Home