import { saveAs } from 'file-saver';
import React from 'react';
import banner from '../../../assets/banner.png'
const Banner = () => {
    const fileDownload = () =>{
        saveAs('https://drive.google.com/file/d/1qKFwQkSJ_SxEi_vGlB3cmifo4edZuIiV/view', 'resume.pdf')
    }
    return (
            <div className="hero min-h-screen bg-black">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className='bg-black mb-5 h-full rounded-lg shadow-2xl'/>
                    <div>
                        <h1 className="text-5xl font-bold text-white">Hi, I am Sultan Mahmud</h1>
                        <p className="py-3 text-3xl font-semibold text-red-600">A Junior Web Developer</p>
                        <button onClick={fileDownload} className="btn btn-secondary btn-outline">Download Resume</button>
                    </div>
                </div>
            </div>
    );
};

export default Banner;