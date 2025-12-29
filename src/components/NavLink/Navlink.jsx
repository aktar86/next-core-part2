import Link from "next/link";
import React from "react";

const Navlink = ({ href, children }) => {
  return <Link href={href}>{children}</Link>;
};

export default Navlink;
