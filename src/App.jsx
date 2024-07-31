export const App = () => {
  const onClickButton = () => {
    alert();
  };

  //CSSオブジェクト
  const contentStyle = {
    color: "blue",
    fontSize: "20px",
  };
  return (
    <>
      console.log("test")
      {}
      <h1 style={{ color: "red" }}>Hello!</h1>
      <p style={contentStyle}>How are you?</p>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};
