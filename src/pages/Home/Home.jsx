import React from 'react';
import About from './About/About';
import Banner from './Banner/Banner';
import Contact from './Contact/Contact';
import Project from './Project/Project';
import Skill from './Skill/Skill';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Project></Project>
            <Skill></Skill>
            <Contact></Contact>
        </div>
    );
};

export default Home;


