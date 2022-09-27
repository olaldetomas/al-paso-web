import React from "react";
import Navigation from "../Navigation";
import Header from "../Header";
import { Body, ContainerStyle } from "./styled";

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
