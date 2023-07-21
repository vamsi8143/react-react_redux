import { useEffect, useRef, useState } from "react";

const UseRefHook = () => {
  const [name, setName] = useState("");
  const [counter, setCounter] = useState(0);
  const prevCounterRef = useRef("");
  const nameElRef = useRef("");

  const resetName = () => {
    setName("");
    nameElRef.current.focus();
    console.log(nameElRef.current.value);
  };
  //   const onChange = (ev) => {
  //     const value = ev.target.value;
  //     setName(value);
  //     nameElRef.current = value;
  //   };

  useEffect(() => {
    prevCounterRef.current = counter;
  }, [counter]);

  return (
    <div>
      <input
        ref={nameElRef}
        type="text"
        autoComplete="off"
        placeholder="enter name" ////(e) => setName(e.target.value)
        value={name}
        onChange={(e) => setName(e.target.value)} //onChange={onChange} this is best practice
      />
      <button onClick={resetName}>Reset</button>
      <p>My Name is {nameElRef.current.value}</p>
      <div>
        <h1>Counter : {counter}</h1>

        {typeof prevCounterRef !== "undefined" && (
          <h2>previous counter :{prevCounterRef.current} </h2>
        )}
        {/* <h2>outside previous counter :{prevCounterRef.current} </h2> */}
        <button onClick={(e) => setCounter(Math.ceil(Math.random() * 100))}>
          Number Generator
        </button>
      </div>
    </div>
  );
};

export default UseRefHook;
