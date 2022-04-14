import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from "./Counter";
import Data from "./Data";
import Transition from "./Transition";
//import Counter from "./counter";
//React18의 Suspense는 server-side-rendering에도 가능하도록 진화하였다.
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Counter />}></Route>
          <Route path="/data" element={<Data />}></Route>
          <Route path="/trans" element={<Transition />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
