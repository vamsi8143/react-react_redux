import { createContext, useState } from "react";
import UseContextFun from "./UseContextFun";
// import UseContextClass from "./UseContextClass";

export const contextProvider = createContext();
const UseContextHook = () => {
  const [counter, setCounter] = useState(0);
  console.log("useHook");
  return (
    <div>
      <h1>App Level :{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>decrement</button>
      <hr></hr>
      <contextProvider.Provider value={{ counter, setCounter }}>
        <UseContextFun />
        <hr></hr>
        {/* <UseContextClass /> */}
      </contextProvider.Provider>
    </div>
  );
};

export default UseContextHook;
