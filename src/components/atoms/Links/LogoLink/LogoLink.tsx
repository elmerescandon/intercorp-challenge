import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoLink = () => {
  return (
    <Link href="/" className="cursor-pointer">
      <Image
        src="/logo_promart.svg"
        alt="logo"
        width={160}
        height={100}
        className="hover:scale-105 transition-transform duration-300 ease-in-out"
      />
    </Link>
  );
};

export default LogoLink;
