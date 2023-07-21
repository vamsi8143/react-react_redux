import useScreen from "./useScreen";

const ScreenComponent = () => {
  const screen = useScreen();
  return (
    <div>
      <h1> Hello Screen Size is :{screen}</h1>
    </div>
  );
};

export default ScreenComponent;
