
import React from 'react';
import profile from '../../../assets/profile.png'
import Typed from 'react-typed'
import linkedin from '../../../assets/link.jpg'
import facebook from '../../../assets/facebook.jpg'
import github from '../../../assets/github.png'
const Banner = () => {
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch('SamplePDF.pdf').then(response => {
            response.blob().then(blob => {
                const fileURL = window.URL.createObjectURL(blob);
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'SamplePDF.pdf';
                alink.click();
            })
        })
    }
    return (
        <div className="hero lg:h-[600px] bg-black pb-5">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className='h-full shadow-2xl'>
                    <img src={profile} className='rounded-full w-[300px] h-[300px]' />
                    <div className='flex justify-center mt-5'>
                        <a href="https://www.linkedin.com/in/mdsultanmahmudbd/" target={'_blank'}><img className='rounded-full h-10 w-10' src={linkedin} alt="" /></a>
                        <a href="https://www.facebook.com/sultanmahmud.bd00/" target={'_blank'}><img className='rounded-full h-10 w-10 mx-5 ' src={facebook} alt="" /></a>
                        <a href="https://github.com/mdsultanmahmud" target={'_blank'}><img className='rounded-full h-10 w-10' src={github} alt="" /></a>
                    </div>
                </div>
                <div>
                    <h1 className="text-5xl font-bold text-white">Hi, I am Sultan Mahmud</h1>
                    <p className="py-3 text-3xl font-semibold text-red-600">
                        <Typed
                            strings={[
                                "I'm a Junior Web Developer",
                                "I'm a Junior React Developer",
                                "I'm a Junior MERN Developer",
                            ]}
                            typeSpeed={150}
                            backSpeed={150}
                            loop
                        />
                    </p>

                    <button onClick={onButtonClick} className="btn btn-secondary btn-outline rounded-tr-3xl rounded-bl-3xl">Download Resume</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;