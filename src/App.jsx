import { useState, useEffect } from "react";
import { ColoredMessage } from "./components/ColoredMessage";
import { InlineStyles } from "./components/InlineStyles";
import { CssModules } from "./components/CssModules";

export const App = () => {
  console.log("rendering");
  // 再レンダリング： stateが更新されたときに関数コンポーネントは再び頭から処理が実行され差分があるDOMを検知してコンポーネントを再処理する
  const [num, setNum] = useState(0);

  const onClickButton = () => {
    setNum(num + 1);
  };

  // ある値が変わったときに限り、ある処理を実行する
  // コンポーネントのマウント時(最初にレンダリングされる時)にも必ず実行される
  useEffect(() => {
    // alert();
  }, [num]);

  // コンポーネントの再レンダリングを何回も繰り返すと、再レンダリングのコストが無駄になるため、値が変わったときだけに実行を行う
  return (
    <>
      <h1 style={{ color: "red" }}>Hello!</h1>
      <ColoredMessage color="blue">How are you?</ColoredMessage>
      <ColoredMessage color="pink">I'm good!</ColoredMessage>
      <button onClick={onClickButton}>Button</button>
      <p>{num}</p>

      <InlineStyles />
      <CssModules />
    </>
  );
};
