import React from "react";

export const InlineStyles = () => {
  const textStyle = {
    color: "blue",
    textAlign: "center",
  };
  return (
    <div style={{ width: "100%", padding: "16px" }}>
      <p style={textStyle}>Hello World!</p>
    </div>
  );
};
