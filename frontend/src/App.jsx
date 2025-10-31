import React from "react";
import { Header } from "./components/Header.jsx";
import { Introduction } from "./components/introduction.jsx";
import { About } from "./components/about.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Introduction />
      <About />
    </div>
  );
}

export default App;
