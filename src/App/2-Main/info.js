import React from "react";

function Info({
  desktopOrMobile,
  title,
  subtitle1,
  paragraph1,
  subtitle2,
  paragraph2,
  position,
}) {
  return (
    <section className={`info ${position}`}>
      {title && (
        <h2 className={`info__title ${position}`}>Designed for the future</h2>
      )}
      <img src={`./images/${desktopOrMobile}.svg`} alt={desktopOrMobile} />
      <div className={`info__container ${position}`}>
        <div className="info__content">
          <div className="info__content-1">
            <h3 className="info__subTitle">{subtitle1}</h3>
            <p className="info__para">{paragraph1}</p>
          </div>
          <div className="info__content-2">
            <h3 className="info__subTitle">{subtitle2}</h3>
            <p className="info__para">{paragraph2}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
