import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const projectDetails = useLoaderData()
    console.log(projectDetails)
    return (
        <div>
            <h1>Here is project details</h1>
        </div>
    );
};

export default Details;