import React from "react";
import { useEffect, useState } from "react";

function Counter() {
  const [counter, setCounter] = useState(0);
  console.log("rendering");
  useEffect(() => {
    setTimeout(() => {
      console.log("done");
    }, 1000);
  }, []);

  const increase = () => {
    setCounter((prev) => prev + 1);
    setCounter((prev) => prev + 2);
  };
  //React18의 개선된 state batching
  //17버전 까지는 리액트 이벤트 핸들러 내에서만 state batching이 일어났다. 아래와 같은 경우 렌더링이 그래서 두번 일어남.
  //왜냐면 ? setState가 비동기 함수에서 진행되기 때문!
  //18버전은 이런 점도 개선되어서 react event handler 밖에서도 state batching이 일어난다.
  const decrease = () => {
    setTimeout(() => {
      setCounter((prev) => prev - 1);
      setCounter((prev) => prev - 2);
    }, 200);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increase}>INCREASE</button>
      <button onClick={decrease}>DECREASE</button>
    </>
  );
}
function get() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("get");
    }, 1000);
  });
}
export default Counter;
