
import React from "react";
// import { navLinks } from "../Constants";
import { logo } from "../assets";




const Navbar = () => {
  return (
<nav className="w-full flex py-6 absolute "> 
<img src={logo} alt="" className="w-[200px]"/>
<ul className="nav-list text-white flex justify-end items-center w-full">
<li className="mr-4">Home </li>
<li className="mr-4">About</li>
<li className="mr-4">Contact</li>

</ul>




</nav>


  )
};

export default Navbar;
