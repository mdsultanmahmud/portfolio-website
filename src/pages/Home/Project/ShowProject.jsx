import React from 'react';
import './ShowProject.css'
import { Link } from 'react-router-dom';
const ShowProject = ({ project }) => {
    const { name, live, image, price,id, description } = project
    return (
        <div>
            <div className="img-box" style={{ backgroundImage: `url("${image}")` }}></div>
            <h1 className='text-xl my-2 font-semibold text-green-700'>Name: {name}</h1>
            <h2 className='text-sm font-bold'>Price: ${price}</h2>
            <p className='text-sm font-semibold text-gray-500'> <strong>Description: </strong>{description.slice(0,100)}...</p>
            <div className='mt-4'>
                <Link to={`/details/${id}`}><button className='btn btn-outline btn-secondary mr-4'>Details</button></Link>
                <a href={live} target='_blank' className='btn btn-outline btn-secondary'>Live Preview</a>
            </div>
        </div>
    );
};

export default ShowProject;