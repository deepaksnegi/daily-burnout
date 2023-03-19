import React from "react";
import "./plans.css";
import { plansData } from "../../assets/data/plansData.js";
import tick from "../../assets/whiteTick.png";
type Props = {};

const Plans = (props: Props) => {
  return (
    <div className="plans-container">
      <div className="plans-header">
        <span className="stroke">Ready to start</span>
        <span>Your Journey </span>
        <span className="stroke">Now With Us</span>
      </div>

      <div className="plans">
        {plansData.map((plan) => (
          <div className="plan" key={plan.name}>
            {plan.icon}
            <span>{plan.name}</span>
            <span>${plan.price}</span>

            <div className="features">
              {plan.features.map((feature) => (
                <div className="feature" key={feature}>
                  <img src={tick} alt="tick" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span>See more benifits </span>
            </div>

            <button>Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
