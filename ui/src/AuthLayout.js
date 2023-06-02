import React from "react";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import {Outlet} from 'react-router-dom';

const AuthLayout = () => {
    return (
        <>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
        </>
    )
};

export default AuthLayout;