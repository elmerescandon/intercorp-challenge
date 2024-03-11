import React from "react";

type Header3Props = {
  text: string;
};

const Header3 = ({text}: Header3Props) => {
  return <p className="text-2xl font-bold tracking-wide text-black">{text}</p>;
};

export default Header3;
