import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  return (
    <>
      {console.log("test")}
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColoredMessage color="blue">How are you?</ColoredMessage>
      <ColoredMessage color="pink">I'm good!</ColoredMessage>
      <button onClick={onClickButton}>Button</button>
      <p>{num}</p>
    </>
  );
};
