import { useState } from "react";

export const useFetchUsers = () => {
  const [userList, setUserList] = useState([{ id: 1 }]);

  // ユーザー取得ボタン押下アクション
  const onClickFetchUser = () => alert("run function");
  // // ボタン押下時にローディングフラグ on、エラーフラグ off
  // setIsLoading(true);
  // setIsError(false);

  // // API の実行
  // axios
  //   .get("https://example.com/users")
  //   .then((result) => {
  //     // 苗字と名前を結合するように変換
  //     const users = result.data.map((user) => ({
  //       id: user.id,
  //       name: `${user.lastname} ${user.firstname}`,
  //       age: user.age,
  //     }));
  //     // ユーザー一覧 State を更新
  //     setUserList(users);
  //   })
  //   // エラーの場合はエラーフラグを on
  //   .catch(() => setIsError(true))
  //   // 処理完了後はローディングフラグを off
  //   .finally(() => setIsLoading(false));

  return { userList, onClickFetchUser };
};
