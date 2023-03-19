import React from "react";
import "./join.css";

type Props = {};

const Join = (props: Props) => {
  return (
    <div className="join" id="join">
      <div className="join-left">
        <hr />
        <div>
          <span className="stroke">Ready To </span>
          <span>Level Up</span>
        </div>
        <div>
          <span>Your Body </span>
          <span className="stroke">With Us?</span>
        </div>
      </div>
      <div className="join-right">
        <form action="" className="email">
          <input type="email" name="email" placeholder="Enter your email" />
          <button className="join-button">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
