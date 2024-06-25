import Link from "next/link";
import React from "react";

type Props = {
  children: React.ReactNode;
  href: string;
};

const LinkButton = ({ children, href }: Props) => {
  return (
    <Link
      className="
      text-lg text-main-text font-extrabold cursor-pointer
      relative bg-transparent 
      transition-colors duration-400 ease-[cubic-bezier(0.25,0.8,0.25,1)]
      hover:text-sec-text focus:text-sec-text
      after:content-[''] after:pointer-events-none after:absolute
      after:bottom-[-2px] after:left-1/2 after:w-0 after:h-0.5
      after:bg-sec-text
      after:transition-[width,left] after:duration-400 after:ease-[cubic-bezier(0.25,0.8,0.25,1)]
      hover:after:w-full hover:after:left-0 focus:after:w-full focus:after:left-0
    "
      href={href}
    >
      {children}
    </Link>
  );
};

export default LinkButton;