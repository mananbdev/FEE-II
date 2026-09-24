import { useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);
  function increament() {
    setCount(count + 1);
  }
  function decreament() {
    setCount(count - 1);
  }
  return { count, increament, decreament };
}
export default useCounter;
