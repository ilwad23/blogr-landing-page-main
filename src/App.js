import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Information from "./components/Information";
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
      <Information desktopOrMobile={desktopOrMobile} />
    </div>
  );
}

export default App;
