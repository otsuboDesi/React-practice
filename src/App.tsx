import React, { useState } from "react";

export const App = () => {
  const [text, setText] = useState<string>("");
  const [memos, setMemos] = useState<string[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log("text:", text);
  };

  const handleClickAdd = () => {
    const newMemos = [...memos];
    newMemos.push(text);
    setMemos(newMemos);
    console.log("memo:", memos);
    setText("");
  };
  return (
    <>
      <h1>Memo App</h1>
      <input value={text} onChange={handleChange}></input>
      <button onClick={handleClickAdd}>追加</button>
    </>
  );
};
