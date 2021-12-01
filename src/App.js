import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
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
      <Main
        desktopOrMobile={desktopOrMobile}
      />
      <Footer desktopOrMobile={desktopOrMobile} />
    </div>
  );
}

export default App;
