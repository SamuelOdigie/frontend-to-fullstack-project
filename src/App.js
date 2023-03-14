import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import { Route, Switch } from "wouter";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
