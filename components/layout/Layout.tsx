import React from "react";
import Navigation from "./Navigation/Navigation";
import Header from "./Header/Header";
import { Body, ContainerStyle } from ".";

const Layout = ({ children, headerTitle }) => {
  return (
    <ContainerStyle>
      <Navigation />

      <Body>
        <Header title={headerTitle} />
        {children}
      </Body>
    </ContainerStyle>
  );
};

export default Layout;
