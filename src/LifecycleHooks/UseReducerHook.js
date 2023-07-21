import { useReducer, useState } from "react";

const initialState = [
  {
    id: Date.now(),
    name: "vamsi",
    email: "vamsi@gmail.com",
    phone: 7793952564,
  },
];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          email: action.payload.email,
          phone: action.payload.phone,
        },
      ];
    case "DELETE":
      return state.filter((contact) => contact.id !== action.payload.id);
    default:
      return state;
  }
};

const UseReducerHook = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const addContact = (e) => {
    e.preventDefault();
    const contact = {
      id: Date.now(),
      name,
      email,
      phone,
    };
    dispatch({ type: "ADD", payload: contact });
    setName("");
    setEmail("");
    setPhone("");
  };

  const addContactValidator = () => {
    if (
      name !== "" &&
      email !== "" &&
      email.includes("@gmail.com") &&
      phone !== "" &&
      phone.length === 10
    ) {
      return false;
    }
    return true;
  };
  //   console.log(addContactValidator);
  return (
    <div>
      <form onSubmit={addContact}>
        <input
          type=""
          value={name}
          placeholder="enter"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type=""
          value={email}
          placeholder="enter"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type=""
          value={phone}
          placeholder="enter"
          maxLength={10}
          onChange={(e) => setPhone(e.target.value)}
        />
        <button disabled={addContactValidator()}>Add Contact</button>
      </form>
      {state.map((contact) => (
        // <ul>
        <li key={contact.id}>
          {contact.name}
          {contact.email}
          {contact.phone}
          <button
            onClick={() => {
              dispatch({ type: "DELETE", payload: { id: contact.id } });
            }}
          >
            Delete
          </button>
        </li>
        // </ul>
      ))}
    </div>
  );
};

export default UseReducerHook;
