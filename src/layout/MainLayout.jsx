import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/SharePage/Footer/Footer';
import Navbar from '../pages/SharePage/Navbar/Navbar';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;