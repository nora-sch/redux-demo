import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Counter from "./features/counter/Counter";
import Home from "./pages/Home";
import NavigationBar from "./components/NavigationBar";
import Login from "./features/login/Login";

function App() {
  // https://react-redux.js.org/tutorials/quick-start
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
