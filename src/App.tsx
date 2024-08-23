import React, { useState, useEffect } from "react";
import axios from "axios";
import { ListItem } from "./components/ListItem";
import type { User } from "./types/user";

const dummyUserData: User[] = [
  { id: 1, name: "Nushida", age: 24, personalColor: "blue" },
  { id: 2, name: "Sakioka", age: 28, personalColor: "pink" },
  { id: 3, name: "Goto", age: 23, personalColor: "green" },
];

export const App = () => {
  console.log("rendering");
  // 取得したユーザー情報
  const [users, setUsers] = useState<User[]>([]);

  // 画面表示時にユーザー情報取得
  // ※実際にはこのエンドポイントは存在しないので注意
  useEffect(() => {
    // axios.get<User[]>("https://example.com/users").then((res) => {
    //   setUsers(res.data);
    setUsers(dummyUserData);
    // });
  }, []);
  return (
    <div>
      {users.map((user) => (
        <ListItem
          id={user.id}
          name={user.name}
          age={user.age}
          personalColor={user.personalColor}
        />
      ))}
    </div>
  );
};
