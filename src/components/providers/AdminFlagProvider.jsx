import { createContext } from "react";

// contextの器を作成
export const AdminFlagContext = createContext({});

// Providerを作成
export const AdminFlagProvider = (props) => {
  const { children } = props;

  // 動作確認の雨に適当なオブジェクトを定義
  const sampleObj = { sampleValues: "テスト" };

  // AdminFlagContextの中にProviderがあるのでそれでchildrenを囲む
  // valueの中にグローバルに扱う実際の値を設定
  return (
    <AdminFlagContext.Provider value={sampleObj}>
      {children}
    </AdminFlagContext.Provider>
  );
};
