import { useState } from "react";

const UseStateHook = () => {
  const [name, setName] = useState("vamsi");
  const [flag, setFlag] = useState(false);
  const [num, setNum] = useState(0);
  const [users, setUsers] = useState([]);
  //   const [date, setDate] = useState(new Date().toString());
  const changeName = () => {
    setName("Nani");
    setFlag(!flag);
    // showDate();
  };

  //   const showDate = () => {
  //     const interval = setInterval(date, 1000);
  //     return setDate(interval);
  //   };

  const increment = () => {
    setNum((state) => state + 1); //state or prevNum or num is not a matter in case of arrow fn
    setNum((prevNum) => prevNum + 1);
  };

  const decrement = () => {
    setNum(num - 1);
  };
  //console.log(name);
  const addName = (e) => {
    e.preventDefault();
    // console.log(name);
    setUsers([...users, { id: users.length, name }]);
    //console.log(users, "clicked");
    setName("");
  };
  return (
    <div>
      <button onClick={changeName}>ToggleButton</button>
      <div>{flag ? name : "vamsi"}</div>
      {/* {flag ? date : ""} */}
      <hr></hr>
      <div>
        <button onClick={increment}>Increment</button>
        <div>{num}</div>
        <button onClick={decrement}>Decrement</button>
      </div>
      <hr></hr>
      {/* <div> */}
      <form onSubmit={addName}>
        <input
          type="text"
          placeholder="enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button>Submit</button>
      </form>
      {/* </div> */}
      <div>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </div>
    </div>
  );
};

export default UseStateHook;
