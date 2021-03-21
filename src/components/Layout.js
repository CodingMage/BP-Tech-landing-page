import React from "react";
import Footer from "./shared/Footer";
import Nav from "./shared/Nav";

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default Layout;
