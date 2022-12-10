import React from 'react';
import fastDelivery from '../../../assets/fastDelivery.png'
import carR from '../../../assets/carRepaire.png'
import mobileCandy from '../../../assets/mobileCandy.png'
import ShowProject from './ShowProject';
const Project = () => {
    const projectList = [
        {
            id:1,
            name:'Fast Delivery',
            image: fastDelivery,
            price: 34,
            live:'https://food-delivery-b6c59.web.app/'
        },
        {
            id:1,
            name:'Car Repaire',
            image: carR,
            price: 34,
            live:'https://car-repaire-mongodb-e0738.web.app/'
        },
        {
            id:1,
            name:'Mobile Candy',
            image: mobileCandy,
            price: 34,
            live:'https://mobile-candy-25ab9.web.app/'
        }
    ]
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