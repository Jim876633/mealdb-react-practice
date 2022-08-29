import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../logo.svg";
import { useGlobalContext } from "../context";
const Navbar = () => {
    const { toggleSideBar, setToggleSideBar } = useGlobalContext();
    const toggleHandler = () => {
        setToggleSideBar(!toggleSideBar);
    };
    return (
        <nav className="navBar">
            <Link to={"/"} className="logo">
                <img src={logo} alt="logo" className="logo-image" />
                <h1 className="logo-title">TheMealDB</h1>
            </Link>
            <Link to={"/"} className="link-home">
                Home
            </Link>
            <Link to={"/about"} className="link-about">
                About
            </Link>
            <div className="togglebtn">
                <FaBars className="togglebtn-icon" onClick={toggleHandler} />
            </div>
        </nav>
    );
};

export default Navbar;
