import { useState } from "react";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";

const Home = () => {
  const [flag, setFlag] = useState(false);
  return (
    <div>
      <button onClick={() => setFlag(!flag)}>Toggle to components</button>
      {flag ? <ClassComponent /> : <FunctionComponent />}
    </div>
  );
};

export default Home;
