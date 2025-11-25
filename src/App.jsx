import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import FloatingLines from "./components/Floatinglines.jsx";
import Heropage from "./components/Heropage.jsx"

function App() {
  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <FloatingLines
         enabledWaves={['top', 'middle', 'bottom']}
    lineCount={[10, 10, 100]}
    // Array - specify line distance per wave; Number - same distance for all waves
    lineDistance={[8, 6, 4]}
    bendRadius={5.0}
    bendStrength={-0.5}
    interactive={true}
    parallax={true}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <Navbar />
          <Heropage/>
        </div>
      </div>
    </>
  );
}

export default App;
