import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Login from "./components/Login.js";
import Home from "./components/Home.js";
import Register from "./components/Register";
import { Route, Switch } from "wouter";
import ProductPage from "./components/ProductPage";
import Cart from "./components/Cart";

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
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/products">
          <ProductPage />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </>
  );
}

export default App;
