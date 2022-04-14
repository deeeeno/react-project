import React from "react";
import { useState } from "react";
import { Suspense } from "react";
import User from "./User";
function Data() {
  const [isVisible, setVisible] = useState(false);
  //서버 사이드 렌더링에서 suspense를 통한 lazy로딩이 가능
  const LazyUser = React.lazy(() => import("./User"));
  const onClick = () => setVisible((prev) => !prev);
  return (
    <>
      <h1>DATA</h1>
      <button onClick={onClick}>LOADING</button>
      <Suspense fallback={<h1>WAITING</h1>}>
        {isVisible ? <LazyUser /> : null}
      </Suspense>
    </>
  );
}
export default Data;
