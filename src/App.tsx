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

  const handleClickDelete = (index: number) => {
    const newMemos = [...memos];
    newMemos.splice(index, 1);
    setMemos(newMemos);
  };
  return (
    <>
      <h1>Memo App</h1>
      <input value={text} onChange={handleChange}></input>
      <button onClick={handleClickAdd}>追加</button>
      <div>Memo List</div>
      <div>
        {memos.map((item, index) => (
          <div key={index}>
            <li>{item}</li>
            <button onClick={() => handleClickDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};
