import React from "react";

export default function Counter() {
  const [count, setCount] = React.useState(0);
  const increment = () => setCount(count + 1);

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={increment}>Increment</button>
    </div>
  );
}
