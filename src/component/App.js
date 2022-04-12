import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import A from "./A";
import B from "./B";
import Z from './Z';
import styles from '../css/style.module.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Z bg={styles.lotso}/>}/>
          <Route path="/a" element={<A bg={styles.green}/>} />
          <Route path="/b" element={<B bg={styles.red}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
