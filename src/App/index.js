import React, { useEffect, useState } from "react";
import Header from "./1-Header";
import Main from "./2-Main";
import Footer from "./3-Footer";

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
      <Footer desktopOrMobile={desktopOrMobile} />
    </div>
  );
}

export default App;
