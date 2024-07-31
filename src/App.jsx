export const App = () => {
  const onClickButton = () => {
    alert();
  };
  return (
    <>
      console.log("test")
      {}
      <h1>Hello!</h1>
      <p>How are you?</p>
      <button onClick={onClickButton}>Button</button>
    </>
  );
};
