import { createContext, useState } from "react";

// contextの器を作成
export const AdminFlagContext = createContext({});

// Providerを作成
export const AdminFlagProvider = (props) => {
  const { children } = props;

  // 管理者フラグ
  const [isAdmin, setIsAdmin] = useState(false);

  // AdminFlagContextの中にProviderがあるのでそれでchildrenを囲む
  // valueの中にグローバルに扱う実際の値を設定
  return (
    // contextをおぶじぇくととしてisAdmin, setIsAdminを設定
    <AdminFlagContext.Provider value={{ isAdmin, setIsAdmin }}>
      {children}
    </AdminFlagContext.Provider>
  );
};

// NOTE:Contextオブジェクトの値が何か更新されたときはuseContextでそのCon

// textを参照しているコンポーネントはすべて再レンダリングされる。
// なので１つのContextに属性の異なる色んなStateを詰め込むのはやめたほうがいい。
