import type { Metadata } from "next";
import "./globals.css";
import Loading from "./loading";
import { Suspense } from "react";



export const metadata: Metadata = {
  title: "First Practice With Next Js",
  description: "Try Somes Practices with Next Js Framework ",
  
};

type Props = Readonly<{
    children: React.ReactNode;
  }>;


export default function RootLayout({children} : Props) {
  return (
    <html lang="en" >
      <body>
        <Suspense fallback={<Loading/>} />
        {children}
      </body>
    </html>
  );
}
