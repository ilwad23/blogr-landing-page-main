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
  return size > 375? "desktop" : "mobile";
};

function App() {
const desktopOrMobile = useScreenSize();
  return (
    <div className="App">
      <Header desktopOrMobile={desktopOrMobile} />
      <Info desktopOrMobile={desktopOrMobile} />
      <Middle desktopOrMobile={desktopOrMobile} />
    </div>
  );
}

export default App;
