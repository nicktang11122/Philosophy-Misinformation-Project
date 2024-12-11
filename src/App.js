import React from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/pages/Home";
import Examples from "./Components/pages/Examples";
import AIPage from "./Components/pages/AIPage";
import PhilPage from "./Components/pages/PhilPage";
import Bibliography from "./Components/pages/Bibliography";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/examples" exact element={<Examples />}></Route>
          <Route path="/ai-detector" exact element={<AIPage />}></Route>
          <Route path="/phil-ideas" exact element={<PhilPage />}></Route>
          <Route path="/bibliography" exact element={<Bibliography />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
