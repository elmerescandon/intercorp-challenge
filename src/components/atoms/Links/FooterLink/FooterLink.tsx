import React from "react";

type FooterLinkProps = {
  href: string;
  text: React.ReactNode;
};

const FooterLink = ({href, text}: FooterLinkProps) => {
  return (
    <a
      href={href}
      target="_blank"
      className="text-sm font-light text-white underline"
    >
      {text}
    </a>
  );
};

export default FooterLink;
