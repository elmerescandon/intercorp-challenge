import React from "react";

type Header1Props = {
  text: string;
};

const Header1 = ({text}: Header1Props) => {
  return (
    <h1 className="font-bold text-6xl tracking-tight text-center pt-16">
      {text}
    </h1>
  );
};

export default Header1;
