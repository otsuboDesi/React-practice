import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const onClickButton = () => {
    alert();
  };

  return (
    <>
      {console.log("test")}
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColoredMessage color="blue">How are you?</ColoredMessage>
      <ColoredMessage color="pink">I'm good!</ColoredMessage>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};
