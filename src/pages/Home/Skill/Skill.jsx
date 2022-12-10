import React from 'react';

const Skill = () => {
    return (
        <div className='my-10' id='skills'>
            <h1 className='text-center text-secondary font-bold text-2xl uppercase'>my skill</h1>
            <p className='font-semibold text-sm text-gray-500 text-center'>Here is my skills to represent my expertise.</p>
            <div className='grid gap-5 grid-cols-1 md:grid-cols-2 p-5 m-5'>
                <div>
                    <div className='my-4 relative'>
                        <span className='font-semibold'>HTML</span>
                        <span className='absolute top-0 right-0 font-bold'>95%</span>
                        <br />
                        <progress className="progress progress-secondary w-full" value="95" max="100"></progress>
                    </div>
                    <div className='my-4 relative'>
                        <span className="font-semibold">CSS</span>
                        <span className='absolute top-0 right-0 font-bold'>85%</span>
                        <br />
                        <progress className="progress progress-secondary w-full" value="85" max="100"></progress>
                    </div>
                    <div className='my-4 relative'>
                        <span className="font-semibold">BOOTSTRAP</span>
                        <span className='absolute top-0 right-0 font-bold'>85%</span>
                        <br />
                        <progress className="progress progress-secondary w-full" value="85" max="100"></progress>
                    </div>
                    <div className='my-4 relative'>
                        <span className="font-semibold">TAILWIND CSS</span>
                        <span className='absolute top-0 right-0 font-bold'>80%</span>
                        <br />
                        <progress className="progress progress-secondary w-full" value="80" max="100"></progress>
                    </div>
                    <div className='my-4 relative'>
                        <span className="font-semibold">JAVASCRIPT</span>
                        <span className='absolute top-0 right-0 font-bold'>80%</span>
                        <br />
                        <progress className="progress progress-secondary w-full" value="80" max="100"></progress>
                    </div>
                </div>
                <div>
                    <div className='my-4 relative'>
                        <span className="font-semibold">REACT JS</span>
                        <span className='absolute top-0 right-0 font-bold'>70%</span>
                        <br />
                        <progress className="progress progress-secondary w-full" value="70" max="100"></progress>
                    </div>
                    <div className='my-4 relative'>
                        <span className="font-semibold">REACT BOOTSTRAP</span>
                        <span className='absolute top-0 right-0 font-bold'>82%</span>
                        <br />
                        <progress className="progress progress-secondary w-full" value="82" max="100"></progress>
                    </div>
                    <div className='my-4 relative'>
                        <span className="font-semibold">NODE JS</span>
                        <span className='absolute top-0 right-0 font-bold'>40%</span>
                        <br />
                        <progress className="progress progress-secondary w-full" value="40" max="100"></progress>
                    </div>
                    <div className='my-4 relative'>
                        <span className="font-semibold">EXPRESS JS</span>
                        <span className='absolute top-0 right-0 font-bold'>43%</span>
                        <br />
                        <progress className="progress progress-secondary w-full" value="43" max="100"></progress>
                    </div>
                    <div className='my-4 relative'>
                        <span className="font-semibold">MONGO DB</span>
                        <span className='absolute top-0 right-0 font-bold'>30%</span>
                        <br />
                        <progress className="progress progress-secondary w-full" value="30" max="100"></progress>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skill;