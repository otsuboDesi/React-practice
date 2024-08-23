import { useContext } from "react";
import { AdminFlagContext } from "./components/providers/AdminFlagProvider";
import { Card } from "./components/Card";

export const App = () => {
  // useContextの内のisAdminと更新関数を取得する
  const { isAdmin, setIsAdmin } = useContext(AdminFlagContext);

  // 切り替え押下時
  const onClickSwitch = () => setIsAdmin(!isAdmin);

  return (
    <div>
      {/* 管理者フラグがtrueの時とそれ以外で文字を出し分け */}
      {isAdmin ? <span>管理者です</span> : <span>管理者以外です</span>}
      <button onClick={onClickSwitch}>切り替え</button>
      <Card />
    </div>
  );
};
