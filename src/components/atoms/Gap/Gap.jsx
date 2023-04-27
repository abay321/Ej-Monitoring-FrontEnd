import React from "react";

const Gap = (props) => {
  const { height, width } = props;
  return <div style={{ width, height }}>{props.children}</div>;
};

export default Gap;
