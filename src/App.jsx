import { useState } from "react";
import { useFetchUsers } from "./hooks/useFetchUser";

export const App = () => {
  const { userList, onClickFetchUser } = useFetchUsers();
  console.log(userList);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  return (
    <div>
      <button onClick={onClickFetchUser}>ユーザー取得</button>
      {/* エラーの場合はエラーメッセージを表示 */}
      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {/* ローディング中は表示を切り替える */}
      {isLoading ? (
        <p>データ取得中です</p>
      ) : (
        // userList.map((user) => (
        //   <p key={user.id}>{`${user.id}: ${user.name} (${user.age}歳)`}</p>
        // ))
        <p>test</p>
      )}
    </div>
  );
};
