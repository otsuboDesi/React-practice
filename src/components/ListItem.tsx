import React from "react";

export const ListItem = (props) => {
  const { id, name, age, personalColor } = props;
  return (
    <p style={{ color: personalColor }}>
      {id}:{name}({age})
    </p>
  );
};
