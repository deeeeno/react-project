import React from "react";
import { useEffect, useState } from "react";
import { fetchData, fetch } from "../api";
export default function User() {
  console.log("로딩");
  (function () {
    function get() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve("data");
        }, 2000);
      });
    }
    get().then((data) => {
      return data;
    });
  })();
  return (
    <>
      <h1>User</h1>
    </>
  );
}
