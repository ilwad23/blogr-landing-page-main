import React from "react";
import Info from "./info";
import Middle from "./Middle";

function Main({ desktopOrMobile }) {
  return (
    <main>
      <Info
        title={true}
        subtitle1="Introducing an extensible editor"
        paragraph1="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
        subtitle2="Robust content management"
        paragraph2="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
        position="left"
        desktopOrMobile={`design-illustration-${desktopOrMobile}`}
      />
      <Middle desktopOrMobile={desktopOrMobile}/>
      <Info
        title={false}
        subtitle1="Free, open, simple"
        paragraph1="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
        subtitle2="Powerful tooling"
        paragraph2="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
        position="right"
        desktopOrMobile={`laptop-${desktopOrMobile}`}
      />
    </main>
  );
}

export default  Main;
