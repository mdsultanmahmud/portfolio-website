import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-black">
                <div className="flex-1">
                    <Link to={'/'} className="btn btn-ghost text-xl uppercase text-white hover:text-green-500 font-bold">Portfolio</Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        <li><a className='font-semibold text-white hover:text-red-600'>Home</a></li>
                        <li><a className='font-semibold text-white hover:text-red-600'>About</a></li>
                        <li><a className='font-semibold text-white hover:text-red-600'>Project</a></li>
                        <li><a className='font-semibold text-white hover:text-red-600'>Skill</a></li>
                        <li><a className='font-semibold text-white hover:text-red-600'>Contact Me</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;