import styled from "styled-components";

import { SButton } from "./Styles";

const SectionTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
`;

const Container = styled.div`
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

type MemoListProps = {
  memos: string[];
  onClickDelete: (index: number) => void;
};

export const MemoList = ({ memos, onClickDelete }: MemoListProps) => {
  return (
    <Container>
      <SectionTitle>Memo List</SectionTitle>
      <ListColBox>
        {memos.map((item, index) => (
          <MemoRowBox key={index}>
            <li>{item}</li>
            <SDeleteButton onClick={() => onClickDelete(index)}>
              Delete
            </SDeleteButton>
          </MemoRowBox>
        ))}
      </ListColBox>
    </Container>
  );
};
