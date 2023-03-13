import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
    </>
  );
}

export default App;
