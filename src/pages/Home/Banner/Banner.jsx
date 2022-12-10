
import React from 'react';
import banner from '../../../assets/banner.png'
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
            <div className="hero min-h-screen bg-black">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className='bg-black mb-5 h-full rounded-lg shadow-2xl'/>
                    <div>
                        <h1 className="text-5xl font-bold text-white">Hi, I am Sultan Mahmud</h1>
                        <p className="py-3 text-3xl font-semibold text-red-600">A Junior Web Developer</p>
                        <button onClick={onButtonClick} className="btn btn-secondary btn-outline">Download Resume</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;