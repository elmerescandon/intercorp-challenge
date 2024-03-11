import React from "react";

type SmallProps = {
  text: string;
  color: string;
};

const Small = ({text, color}: SmallProps) => {
  return <p className={`text-sm font-medium ${color}`}>{text}</p>;
};

export default Small;
