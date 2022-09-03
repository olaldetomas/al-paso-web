import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";

const Container = ({ children }) => {
  return (
    <>
      <Navbar />
      <Header />
      {children}
    </>
  );
};

export default Container;
