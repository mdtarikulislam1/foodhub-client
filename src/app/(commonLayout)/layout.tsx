import Footer from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import React from "react";

export default function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar className="sticky top-0 z-50 w-full backdrop-blur-2xl"></Navbar>
      {children}
      <Footer></Footer>
    </div>
  );
}
