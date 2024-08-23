import { useFetchUsers } from "./hooks/useFetchUser";

export const App = () => {
  const { userList, isError, isLoading, onClickFetchUser } = useFetchUsers();
  console.log(userList);

  return (
    <div>
      <button onClick={onClickFetchUser}>ユーザー取得</button>
      {/* エラーの場合はエラーメッセージを表示 */}
      {isError && <p style={{ color: "red" }}>エラーが発生しました</p>}
      {/* ローディング中は表示を切り替える */}
      {isLoading ? (
        <p>データ取得中です</p>
      ) : (
        userList.map((user) => (
          <p key={user.id}>{`${user.id}: ${user.name} (${user.age}歳)`}</p>
        ))
      )}
    </div>
  );
};
