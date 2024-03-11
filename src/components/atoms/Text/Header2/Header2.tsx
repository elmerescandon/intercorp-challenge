import React from "react";

type Header2Props = {
  text: string;
};

const Header2 = ({text}: Header2Props) => {
  return <p className="text-4xl font-bold tracking-tight">{text}</p>;
};

export default Header2;
