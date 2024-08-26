import React, { useState } from "react";
import { styled } from "styled-components";

import { MemoList } from "./components/MemoList";
import { SButton } from "./components/Styles";
import { useMemoList } from "./hooks/useMemoList";

const Title = styled.h1``;

const SearchBox = styled.div`
  display: flex;
  gap: 20px;
`;

const SInput = styled.input`
  height: 20px;
`;

export const App = () => {
  const [text, setText] = useState<string>("");
  const { memos, addList, deleteList } = useMemoList(text);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    console.log("text:", text);
  };

  const handleClickAdd = () => {
    addList(text);
    console.log("memo:", memos);
    setText("");
  };

  const handleClickDelete = (index: number) => {
    deleteList(index);
  };
  return (
    <>
      <Title>Memo App</Title>
      <SearchBox>
        <SInput value={text} onChange={handleChange}></SInput>
        <SButton onClick={handleClickAdd}>追加</SButton>
      </SearchBox>
      <MemoList memos={memos} onClickDelete={handleClickDelete} />
    </>
  );
};
