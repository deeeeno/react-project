import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import A from "./A";
import B from "./B";
console.log("hi");

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/a" element={<A />} />
          <Route path="/b" element={<B />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
