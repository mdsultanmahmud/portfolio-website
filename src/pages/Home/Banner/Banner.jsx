
import React from 'react';
import banner1 from '../../../assets/banner1.png'
import Typed from 'react-typed'
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
        <div className="hero md:h-[600px] bg-black">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={banner1} className='bg-black mb-5 h-full rounded-lg shadow-2xl' />
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