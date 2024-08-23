import { useState } from "react";
import axios from "axios";

export const useFetchUsers = () => {
  const [userList, setUserList] = useState([{ id: 1 }]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  // ユーザー取得ボタン押下アクション
  const onClickFetchUser = () => {
    // ボタン押下時にローディングフラグ on、エラーフラグ off
    setIsLoading(true);
    setIsError(false);

    // API の実行
    axios
      .get("https://example.com/users")
      .then((result) => {
        // 苗字と名前を結合するように変換
        const users = result.data.map((user) => ({
          id: user.id,
          name: `${user.lastname} ${user.firstname}`,
          age: user.age,
        }));
        // ユーザー一覧 State を更新
        setUserList(users);
      })
      // エラーの場合はエラーフラグを on
      .catch(() => setIsError(true))
      // 処理完了後はローディングフラグを off
      .finally(() => setIsLoading(false));
  };

  return { userList, isError, isLoading, onClickFetchUser };
};
