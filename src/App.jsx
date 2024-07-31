import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      {console.log("test")}
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColoredMessage color="blue" message="How are you?" />
      <ColoredMessage color="pink" message="I'm good!" />
      <button onClick={onClickButton}>Button</button>
    </>
  );
};
