import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListItem } from "./components/ListItem";

type User = {
  id: number;
  name: string;
  age: number;
  personalColor: string;
};

export const App = () => {
  console.log("rendering");
  // 取得したユーザー情報
  const [users, setUsers] = useState<User[]>([]);

  // 画面表示時にユーザー情報取得
  // ※実際にはこのエンドポイントは存在しないので注意
  useEffect(() => {
    // axios.get<User[]>("https://example.com/users").then((res) => {
    //   setUsers(res.data);
    // });
  }, []);
  return (
    <div>
      {users.map((user) => (
        <ListItem id={user.id} name={user.name} age={user.age} />
      ))}
    </div>
  );
};
