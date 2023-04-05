import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NavBar = () => {
  return (
    <div className="mainDiv">
      <div>
        <ul className="ulList">
          <li className="listItem nav-link-ltr">About</li>
          <li className="listItem nav-link-ltr">News</li>
          <li className="listItem nav-link-ltr">Services</li>
          <li className="listItem nav-link-ltr">Our Team</li>
          <li className="listItem nav-link-ltr">Make Enquiry</li>
        </ul>
      </div>

      <div className="buttonDiv">
        <button className="button">Contact us</button>
        <HiOutlineArrowNarrowRight size={20} className="icon"/>
      </div>
    </div>
  );
};

export default NavBar;
