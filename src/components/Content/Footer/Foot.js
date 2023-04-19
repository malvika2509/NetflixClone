import React from "react";
import "./Footer.css";
import "../../Navbar/Navbar.css";
export default function Foot() {
  return (
    <div>
      <div class="footer">
        <h2>Questions? Call 111-222-333-444</h2>
        <div class="row">
          <div class="col">
            <a href="#">FAQ</a>
            <a href="#">Media Centre</a>
            <a href="#">Ways to watch</a>
            <a href="#">Cookie Preferences</a>
            <a href="#">Speed Test</a>
          </div>
          <div class="col">
            <a href="#">Help Centre</a>
            <a href="#">Investor Relations</a>
            <a href="#">Terms of Use</a>
            <a href="#">Corporate Information</a>
            <a href="#">Legal Notices</a>
          </div>
          <div class="col">
            <a href="#">Accounts</a>
            <a href="#">Jobs</a>
            <a href="#">Privacy</a>
            <a href="#">Contact Us</a>
            <a href="#">Only on Netflix</a>
          </div>
        </div>
        <div class="footerselect">
          <select name="" id="" class="lang">
            <option value="">English</option>
            <option value="">Hindi</option>
          </select>
        </div>
        <p class="copyright">Netflix India</p>
      </div>
    </div>
  );
}
