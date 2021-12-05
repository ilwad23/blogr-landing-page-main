import React, { useEffect, useState } from "react";
import "../sass/main.scss";
import Header from "./components/1-Header";
import Main from "./components/2-Main";

const useScreenSize = () => {
  const [size, setSize] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);
  return size > 585 ? "desktop" : "mobile";
};

function App() {
  const desktopOrMobile = useScreenSize();
  return (
    <div className="container">
      <Header desktopOrMobile={desktopOrMobile} />
      <Main desktopOrMobile={desktopOrMobile} />
    </div>
  );
}

export default App;
