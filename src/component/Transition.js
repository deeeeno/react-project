import React from "react";
import { useEffect, useState, useTransition } from "react";

export default function Transition() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [encode, setEncode] = useState("");
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    console.log(input);
  }, [input]);
  useEffect(() => {
    console.log(query);
  }, [query]);
  useEffect(() => {
    console.log(encode);
  }, [encode]);
  const onChange = (e) => {
    const input = e.target.value;

    setInput(input);
    startTransition(() => {
      setQuery(input);
      setEncode(encodeURIComponent(input));
    });
  };
  return (
    <>
      <h1>Transition</h1>
      <input onChange={onChange}></input>
    </>
  );
}
