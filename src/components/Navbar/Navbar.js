import React from "react";
import logo from "../../images/logo.jpg";
import "./Navbar.css";
// import { CiGlobe } from "react-icons/ci";

export default function Navbar() {
  return (
    <div>
      <nav>
        <img src={logo} alt="" class="logo" />
        <div>
          <select name="" id="" class="lang">
            <option value="">English</option>
            <option value="">Hindi</option>
          </select>
          <button>Sign In</button>
        </div>
      </nav>
    </div>
  );
}
