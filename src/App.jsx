import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./index.css";
import "./styles/LoadingScreen.css";
import Navbar from "./components/Navbar.jsx";
import FloatingLines from "./components/Floatinglines.jsx";
import Heropage from "./components/heropage.jsx";
import SkillPage from "./components/Skills.jsx"
const LoadingScreen = ({ onComplete }) => {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      key="loading-screen"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-dark loading-screen"
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="relative w-24 h-24 loading-spinner-container">
        <motion.span
          className="absolute inset-0 rounded-full border-t-4 border-brand-purple spinner-ring-1"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="absolute inset-2 rounded-full border-r-4 border-brand-accent spinner-ring-2"
          animate={{ rotate: -360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-2xl loading-rocket"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          🚀
        </motion.div>
      </div>
      <motion.h2
        className="mt-8 text-xl font-display tracking-widest text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        PREPARING LAUNCH
      </motion.h2>
    </motion.div>
  );
};

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        ) : (
          <motion.div
            key="main-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ width: "100%", height: "100vh", position: "relative" }}
          >
            <FloatingLines
              enabledWaves={["top", "middle", "bottom"]}
              lineCount={[4, 4, 4]}
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
              <Heropage />
              <SkillPage/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
