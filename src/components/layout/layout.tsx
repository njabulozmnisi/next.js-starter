import React, { ReactElement } from "react";
import Header from './header'
import Footer from './footer'

export default function Layout({ children }: { children: ReactElement} ) {
  return (
    <>
      <Header />
      <main className="min-h-[72vh]">{children}</main>
      <Footer />
    </>
  )
}