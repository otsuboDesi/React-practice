import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

const style = {
  width: "100px",
  padding: "6px",
  borderRadius: "8px",
};

export const EditButton = (props) => {
  const { isAdmin } = props;
  // isAdminがfalseの時にボタンを非活性にする

  // useContextの引数に参照するContextwお設定する
  const contextValue = useContext(AdminFlagContext);
  console.log(contextValue);

  return (
    <button style={style} disabled={!isAdmin}>
      編集
    </button>
  );
};
