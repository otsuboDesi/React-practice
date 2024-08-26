import { useCallback, useState } from "react";

export const useMemoList = (text: string) => {
  const [memos, setMemos] = useState<string[]>([]);

  const addList = useCallback(
    (text: string) => {
      const newMemos = [...memos];
      newMemos.push(text);
      setMemos(newMemos);
    },
    [memos]
  );

  const deleteList = useCallback(
    (index: number) => {
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return { memos, addList, deleteList };
};
