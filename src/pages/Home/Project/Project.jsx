import React, { useEffect, useState } from 'react';
import ShowProject from './ShowProject';
const Project = () => {
    const [projectList, setProjectList] = useState([])
    useEffect(() =>{
        fetch('http://localhost:5000/projects')
        .then(res => res.json())
        .then(data => setProjectList(data))
    } ,[])
    return (
        <div id='project' className='my-10'>
            <h1 className='text-center text-2xl font-bold text-secondary mb-5'>My Demo Project</h1>
            <hr />
           <div className='grid  gap-7 p-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                projectList.map(project => <ShowProject 
                    key={project.id}
                    project = {project}
                ></ShowProject>)
            }
           </div>
        </div>
    );
};

export default Project;