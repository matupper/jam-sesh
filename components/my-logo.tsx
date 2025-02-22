"use client";

import Image from "next/image";

export default function MyLogo() {
  return (
    <Image
      src="/images/afol-logo.png"
      alt="AFOL Logo"
      width={112}
      height={38}
      style={{ margin: "10px 0px 0px 0px" }}
    />
  );
} 