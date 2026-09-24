import { useState } from "react";
import useCounter from "./useCounter";

export default function User() {
  const [name, setName] = useState("");
  function handleChange(e) {
    setName(e.target.value);
  }
  const { count, increament, decreament } = useCounter();
  return (
    <>
      <h1>User Data</h1>
      <input type="text" onChange={handleChange} />
      <h2>Username is {name}</h2>
      <p>{count}</p>
      <button onClick={increament}>Increment</button>
      <button onClick={decreament}>Decrement</button>
    </>
  );
}
