import React from "react";
import type { FC } from "react";
import type { User } from "../types/user";

// FCは関数コンポーネントの型。FCはchildrenを含み、VFCは含まない
export const ListItem: FC<User> = (props) => {
  const { id, name, age, personalColor } = props;
  return (
    <p style={{ color: personalColor }}>
      {id}:{name}({age})
    </p>
  );
};
