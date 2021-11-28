import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Info from "./components/Info";
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
      <Info desktopOrMobile={desktopOrMobile} />
    </div>
  );
}

export default App;
