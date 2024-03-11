import React from "react";

type FooterTextProps = {
  text: string;
};

const FooterText = ({text}: FooterTextProps) => {
  return <p className="text-sm font-light text-white">{text}</p>;
};

export default FooterText;
