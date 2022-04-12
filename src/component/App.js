import React from "react";
import { Suspense } from "react";
import Counter from "./counter";
//React18의 Suspense는 server-side-rendering에도 가능하도록 진화하였다.
function App() {
  return (
    <>
      <Suspense fallback={<h1>WAIT</h1>}>
        <Counter />
      </Suspense>
    </>
  );
}

export default App;
