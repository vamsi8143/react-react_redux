import { useContext } from "react";
import { contextProvider } from "./UseContextHook";

const UseContextFun = () => {
  const { counter, setCounter } = useContext(contextProvider);
  console.log("function");
  return (
    <div>
      <h1>Function Comp : {counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
      <hr></hr>
      <FunChild />
    </div>
  );
};

const FunChild = () => {
  const { counter, setCounter } = useContext(contextProvider);
  console.log("child");
  return (
    <div>
      <h1>child Function:{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <button onClick={() => setCounter(counter - 1)}>Decrement</button>
    </div>
  );
};

export default UseContextFun;
