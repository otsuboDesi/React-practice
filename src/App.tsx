import { Button } from "@mui/material";
import React, { useState } from "react";
import { styled } from "styled-components";

const Title = styled.h1``;

const SearchBox = styled.div`
  display: flex;
  gap: 20px;
`;

const SInput = styled.input`
  height: 20px;
`;

const SButton = styled.button`
  padding: 4px 8px;
  background-color: lightblue;
  border: none;
  border-radius: 2px;
  &:hover {
    background-color: #4b7b8b;
    color: white;
    cursor: pointer;
  }
`;

const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const MemoList = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  padding: 20px;
  background-color: lightgrey;
  border-radius: 4px;
`;

const ListColBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
`;

const MemoRowBox = styled.div`
  display: flex;
  gap: 20px;
`;

const SDeleteButton = styled(SButton)`
  background-color: red;
  color: white;
  &:hover {
    background-color: #994d4d;
  }
`;

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
      <Title>Memo App</Title>
      <SearchBox>
        <SInput value={text} onChange={handleChange}></SInput>
        <SButton onClick={handleClickAdd}>追加</SButton>
      </SearchBox>
      <MemoList>
        <SectionTitle>Memo List</SectionTitle>
        <ListColBox>
          {memos.map((item, index) => (
            <MemoRowBox key={index}>
              <li>{item}</li>
              <SDeleteButton onClick={() => handleClickDelete(index)}>
                Delete
              </SDeleteButton>
            </MemoRowBox>
          ))}
        </ListColBox>
      </MemoList>
    </>
  );
};
