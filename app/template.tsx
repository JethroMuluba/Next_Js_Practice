"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

type Props = {
  children: React.ReactNode;
};

const Template = ({ children }: Props) => {

    const pathname = usePathname()

  return (
    <>
      <header className="flex justify-between items-center px-20 py-5" id="header">

            <Link href= "/">
                <span className="flex font-bold text-2xl text-amber-500 ">
                    Jethro Code
                </span>
            </Link>

        <nav>
          <ul className="flex text-xs text-white gap-10 cursor-pointer">

            <Link className={`link ${pathname === '/' ? 'text-amber-500' : ''}`} href= "/">
                <li>Home</li>
            </Link>
            <Link className={`link ${pathname === '/about_me' ? 'text-amber-500 ' : ''}`} href= "/about_me">
                <li>About Me</li>
            </Link>
            <Link className={`link ${pathname === '/realisations' ? 'text-amber-500 ' : ''}`} href= "/realisations">
                <li>Realisations</li>
            </Link>
            <Link className={`link ${pathname === '/experiences' ? 'text-amber-500 ' : ''}`} href= "/experiences">
                <li>Experiences</li>
            </Link>
            <Link className={`link ${pathname === '/contact_me' ? 'text-amber-500 ' : ''}`} href= "/contact_me">
                <li>Contact Me</li>
            </Link>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <div className="flex justify-between py-5 px-20">
            <h2>Je suis le footer qui servira toute les pages de ce App</h2>
            <Link href="#header">
                <span>Allez vers le haut de page</span>
            </Link>
        </div>
      </footer>
    </>
  );
};
export default Template;
