import React from "react";
import { Header } from "./components/Header.jsx";
import { Introduction } from "./components/introduction.jsx";
import { About } from "./components/about.jsx";
import { CommitmentOverview } from "./components/commitmentOverview.jsx";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Introduction />
      <About />
      <CommitmentOverview />
    </div>
  );
}

export default App;
