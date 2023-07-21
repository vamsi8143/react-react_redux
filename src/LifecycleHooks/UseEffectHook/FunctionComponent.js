import { useEffect, useState } from "react";

const FunctionComponent = () => {
  const [time, setTime] = useState(new Date().toString());
  const [message, setMessage] = useState("Function Component");
  const [count, setCount] = useState([]);
  useEffect(() => {
    console.log("updated");
    const interval = setInterval(showDate, 1000);
    return () => clearInterval(interval, console.log("clean up phase"), "");
  }, [message, time]);

  const showDate = () => {
    setTime(new Date().toString());
  };
  const changeMessage = (e) => {
    e.preventDefault();
    setMessage(count);
    setCount("");
  };
  return (
    <div>
      <h1>{message}</h1>
      <h1>{time}</h1>
      <form onSubmit={changeMessage}>
        <input
          type="text"
          placeholder="enter message"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FunctionComponent;

// prevent the memory leaks
// {
// const [todo, setTodo] = useState();
// const [count, setCount] = useState(0);
//   const result = () => {
//     const controller = new AbortController();
//     const signal = controller.signal;
//     fetch("https://jsonplaceholder.typicode.com/todos/1", {
//       signal,
//     })
//       .then((response) => response.json())
//       .then((data) => setTodo(data))
//       .catch((error) => {
//         console.log(error);
//       });

//     return controller;
//   };
//   useEffect(() => {
//     const controller = result();
//     return () => controller.abort();
//   }, [count]);
//   return (
//     <div>
//       {JSON.stringify(todo)}
//       <button onClick={() => setCount(count + 1)}>click</button>
//     </div>
//   );
// }
