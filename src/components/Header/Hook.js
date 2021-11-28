import React from "react";
import { useStateValue } from "../../states/StateProvider";
function Hook() {
  const state = useStateValue()[0];
  return (
    state.toggle && (
      <section className="hook">
        <div className="hook__wrapper">
          <h1 className="hook__title">A modern publishing platform</h1>
          <p className="hook__subTitle">
            Grow your audience and build your online brand
          </p>
          <div className="hook__btns">
            <button className="hook__btns-start  btn">Start for Free</button>
            <button className="hook__btns-learn hook__btn btn">
              Learn More
            </button>
          </div>
        </div>
      </section>
    )
  );
}

export default Hook;
