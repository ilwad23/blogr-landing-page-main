import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
// import Info2 from "./components/Info2";
import Middle from "./components/Middle";
import "./sass/main.scss";

const useScreenSize = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size > 585? "desktop" : "mobile";
};

function App() {
  const desktopOrMobile = useScreenSize();
  return (
    <div className="app">
      <Header desktopOrMobile={desktopOrMobile} />
      <Info
        desktopOrMobile={desktopOrMobile}
      />
      <Middle desktopOrMobile={desktopOrMobile} />
      {/* <Info2
        desktopOrMobile={desktopOrMobile}
        subtitle1="Free, open, simple"
        para1="Blogr is a free and open source application backed by a large community of helpful developers. It supports features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools, and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn."
        subtitle2="Powerful tooling"
        para2="Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but capable of producing even the most complicated sites."
        img="laptop"
      /> */}
    </div>
  );
}

export default App;
