import Image from "next/image";
import Link from "next/link";
import React from "react";

const LogoLink = () => {
  return (
    <Link href="/">
      <Image src="/logo_promart.svg" alt="logo" width={160} height={100} />
    </Link>
  );
};

export default LogoLink;
