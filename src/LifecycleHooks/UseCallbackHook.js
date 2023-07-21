import { useCallback, useEffect, useMemo, useState } from "react";

const UseCallbackHook = () => {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const result = useMemo(() => {
    console.log("usememo render");
    return factorial(counter);
  }, [counter]);
  //   const result = factorial(counter);
  //   console.log("component render");
  //   console.log("usememo", result); getting the value

  const displayName = useCallback(
    (greetings) => {
      return greetings + " " + name;
    },
    [name]
  );
  //   console.log("useCallback", displayName); // getting the function
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
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <hr></hr>
      {/* <h1>my name is {name}</h1> */}
      <DisplayComp displayName={displayName}></DisplayComp>
    </div>
  );
};

const DisplayComp = ({ displayName }) => {
  const [value, setValue] = useState("");
  //   const showName = () => {
  //     const name = displayName();
  //     setValue(name);
  //   };
  useEffect(() => {
    setValue(displayName("Hello"));
    console.log("display comp");
  }, [displayName]);

  return (
    <div>
      <h1>{value}</h1>
      {/* <button onClick={showName}>Click</button> */}
    </div>
  );
};

function factorial(n) {
  let i = 0;
  while (i < 100000000) i++;
  if (n <= 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

export default UseCallbackHook;
