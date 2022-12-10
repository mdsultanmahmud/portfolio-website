import React from 'react';
import './ShowProject.css'
const ShowProject = ({ project }) => {
    const { name, live, image, price } = project
    console.log(project)
    return (
        <div>
            <div className="img-box" style={{ backgroundImage: `url("${image}")` }}></div>
            <h1 className='text-xl my-2 font-semibold text-green-700'>Name: {name}</h1>
            <h2 className='text-sm font-bold'>Price: ${price}</h2>
            <div className='mt-4'>
                <button className='btn btn-outline btn-secondary mr-4'>Buy</button>
                <a href={live} target='_blank' className='btn btn-outline btn-secondary'>Live Preview</a>
            </div>
        </div>
    );
};

export default ShowProject;