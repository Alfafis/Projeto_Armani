import React from "react";
import Rotas from "./routes";
import { BrowserRouter } from "react-router-dom";

import Navbar from "./components/navbar/navbar";
import Divisor from "./components/divisor/divisor";
import Footer from "./components/footer/footer";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Rotas />
      <Divisor />
    </BrowserRouter>
  );
}

export default App;
