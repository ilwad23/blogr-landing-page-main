import React from "react";

function Middle({ desktopOrMobile }) {
  return (
    <section className="middle">
      <div className="middle__wrapper">
        <img
          className="middle__phoneImg"
          src={`./images/phones-${desktopOrMobile}.svg`}
          alt="phones"
        />
        <div className="middle__content">
          <div className="title">
            State of the Art <span>Infrastructure</span>
          </div>
          <div className="para">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </div>
        </div>
      </div>
      <img
        className="middle__bgCirclesImg"
        src={`./images/bg-circles-${desktopOrMobile}.svg`}
        alt="bg-circles"
      />
    </section>
  );
}

export default Middle;
