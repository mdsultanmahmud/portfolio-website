import React from 'react';
import { useLoaderData } from 'react-router-dom';
import tick from '../../../assets/tick.svg'
const Details = () => {
    const projectDetails = useLoaderData()
    const { name, live, picture, price, technology, details, code, description } = projectDetails
    // console.log(details)
    console.log(projectDetails)
    return (
        <div>
            <h1 className='my-6 text-center text-secondary font-bold text-2xl'>Project Name: {name}</h1>

            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={picture.pic1} className="md:w-70% mx-auto h-[450px]" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src={picture.pic2} className="md:w-70% mx-auto h-[450px]" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src={picture.pic3} className="md:w-70% mx-auto h-[450px]" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>

            <div className='p-5 md:ml-8'>
                <p className='my-5 text-gray-500'><strong>Description:</strong> {description}</p>
                <h4>Feature</h4>
                <ul>
                    {
                        details &&
                        details.map(det => <div className='flex'>
                            <img className='w-5 h-5 mr-2' src={tick} alt="" />
                            <li className='text-sm font-semibold text-gray-600'>{det}</li>
                        </div>)
                    }
                </ul>
                <div className='my-4'>
                    <h3 className='text-xl font-bold text-secondary'>Used Technology:</h3>
                    <p className='text-sm text-gray-500 font-semibold'><strong>Front-end: </strong>{technology.client}</p>
                    <p className='text-sm text-gray-500 font-semibold'><strong>Back-end: </strong>{technology.server}</p>
                </div>
                <div className='flex flex-col md:flex-row md:justify-around'>
                    <a href={live} target='_blank'><button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-orange-500 hover:to-sky-600 rounded-tr-2xl rounded-bl-2xl font-bold text-white' >Live Site</button></a>
                    <a href={code?.client} target='_blank'><button className='my-5 md:my-0 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-orange-500 hover:to-sky-600 rounded-tr-2xl rounded-bl-2xl font-bold text-white' >Front-end Code</button></a>
                    <a href={code?.server} target='_blank'><button className='px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-orange-500 hover:to-sky-600 rounded-tr-2xl rounded-bl-2xl font-bold text-white' >Back-end Code</button></a>
                </div>
            </div>
        </div>
    );
};

export default Details;