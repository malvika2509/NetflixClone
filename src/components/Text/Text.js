import React from "react";
import "./Text.css";
import { BsChevronRight } from "react-icons/bs";
import Navbar from "../Navbar/Navbar";

export default function Text() {
  return (
    <div className="header">
      <Navbar></Navbar>
      <div class="text">
        <h1>Unlimited movies, TV shows and more</h1>
        <h3>Watch anywhere. Cancel anytime.</h3>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <form action="" class="email-signup">
          <input type="email" placeholder="Email Address" required />
          <button type="Submit">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                fontWeight: "bold",
              }}
            >
              <span> Get Started</span>
              <BsChevronRight size={25} />
            </div>
          </button>
        </form>
      </div>
    </div>
  );
}
