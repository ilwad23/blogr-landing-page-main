import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
import Middle from "./components/Middle";
import "./app.css";

const useScreenSize = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size > 375 ? "desktop" : "mobile";
};

function App() {
  const desktopOrMobile = useScreenSize();
  return (
    <div className="App">
      <Header desktopOrMobile={desktopOrMobile} />
      <Info
        desktopOrMobile={desktopOrMobile}
        title="Designed for the future"
        subtitle1="Introducing an extensible editor"
        para1="Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown. Extensibility with plugins and themes provide easy ways to add functionality or change the looks of a blog."
        subtitle2="Robust content management"
        para2="Flexible content management enables users to easily move through posts. Increase the usability of your blog by adding customized categories, sections, format, or flow. With this functionality, you’re in full control."
        img="design-illustration"
      />
      <Middle desktopOrMobile={desktopOrMobile} />
      <Info
        desktopOrMobile={desktopOrMobile}
        subtitle1="Free, open, simple"
        para1="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
        subtitle2="Powerful tooling"
        para2="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
        img="laptop"
      />
    </div>
  );
}

export default App;
