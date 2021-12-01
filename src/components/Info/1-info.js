import React from "react";

function Info({ desktopOrMobile }) {
  return (
    <section className="info l">
      <h2 className="info__title l">Designed for the future</h2>
      <img
        src={`./images/design-illustration-${desktopOrMobile}.svg`}
        alt="design-illustration"
      />
      <div className="info__container l">
        <div className="info__content">
          <div className="info__content-1">
            <h3 className='info__subTitle'>Introducing an extensible editor</h3>
            <p className="info__para">
              Blogr features an exceedingly intuitive interface which lets you
              focus on one thing: creating content. The editor supports
              management of multiple blogs and allows easy manipulation of
              embeds such as images, videos, and Markdown. Extensibility with
              plugins and themes provide easy ways to add functionality or
              change the looks of a blog.
            </p>
          </div>
          <div className="info__content-2">
            <h3 className='info__subTitle'>Robust content management</h3>
            <p className="info__para">
              Flexible content management enables users to easily move through
              posts. Increase the usability of your blog by adding customized
              categories, sections, format, or flow. With this functionality,
              you’re in full control.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
