import React from 'react';
import about from '../../../assets/website.jpg'
const About = () => {
    return (
        <div id='about'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={about} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='md:ml-5'>
                        <h1 className="text-5xl font-bold text-secondary">About Me</h1>
                        <p className="py-6 text-gray-500">My name is Md. Sultan Mahmud. I'm a junior react developer. I'm expert in HTML, CSS, JavaScript, Bootstrap, Tailwind, React, React Bootstrap, and Daisy UI. Also I'm comfortable with Node, Express, mongodB, and Firebase authentication systems. I can manage many web development tools like vs code, GitHub, vercel (for hosting server), netlify (live website hosting). I can smoothly manage the GitHub version controller. My design sense is good, I'm comfortable with Figma. I believed that I would be the perfect candidate for your job vacancy.
                        </p>
                        <h3 className='font-bold text-xl text-red-600'><strong>Education:</strong> B.Sc in Statistics, Rajshahi University | 2020-Present</h3>
                        <button className="btn btn-secondary mt-4">Hire me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;