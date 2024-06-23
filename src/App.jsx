import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import SingleCategory from "./Pages/SingleCategory/SingleCategory";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home/>}  />
            <Route path="/category/:category" element={<SingleCategory/>}  />
            
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
