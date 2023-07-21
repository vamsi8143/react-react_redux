import React, { useMemo, useState } from "react";

const UseMemoHook = () => {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const result = useMemo(() => {
    console.log("render"); // it render only when counter updated
    return factorial(counter);
  }, [counter]);
  //   const result = factorial(counter); // in this case it render the component when usestate updated
  //   console.log("Hook Render");

  return (
    <div>
      <h1>{result}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>

      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <hr></hr>
      <input
        type="text"
        placeholder="enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <hr></hr>
      {/* <h1>my name is {name}</h1> */}
      <DisplayName name={name}></DisplayName>
    </div>
  );
};

export const DisplayName = React.memo(({ name }) => {
  //without memo this component also rerender when ever state updated
  console.log("Display render");
  return (
    <div>
      <h1>my name is {name}</h1>
    </div>
  );
});
function factorial(n) {
  let i = 0;
  while (i < 1000000000) i++;
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

export default UseMemoHook;
