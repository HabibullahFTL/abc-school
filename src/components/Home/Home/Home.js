import React from 'react';
import Header from '../Header/Header';
import Slider from '../Slider/Slider';
import Services from '../Services/Services';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div>
            <Header/>
            <Slider/>
            <Services/>
            <Footer/>
        </div>
    );
};

export default Home;