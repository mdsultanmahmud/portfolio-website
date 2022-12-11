import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.jpg'
const Navbar = () => {
    const menuList = <>

        <li><Link to={'/'} className='font-semibold text-white hover:text-red-600'>Home</Link></li>
        <li><a href='#about' className='font-semibold text-white hover:text-red-600'>About</a></li>
        <li><a href='#project' className='font-semibold text-white hover:text-red-600'>Project</a></li>
        <li><a href='#skills' className='font-semibold text-white hover:text-red-600'>Skill</a></li>
        <li><a href='#contact' className='font-semibold text-white hover:text-red-600'>Contact Me</a></li>
        <li><Link to={'/blog'} href='#contact' className='font-semibold text-white hover:text-red-600'>Blog</Link></li>
    </>
    return (
        <div>

            <div className="navbar bg-black">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-pink-500 rounded-box w-52">
                           {menuList}
                        </ul>
                    </div>
                    <div className='flex'>
                        <img className='h-[40px] w-[40px] rounded-full' src={logo} alt="" />
                    <Link to={'/'} className="btn btn-ghost text-xl uppercase text-white hover:text-green-500 font-bold">Portfolio</Link>
                    </div>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                       {menuList}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;