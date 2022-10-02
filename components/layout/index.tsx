import React, { useState } from "react";
import Navigation from "../Navigation";
import Header from "../Header";
import { Body, ContainerStyle } from "./styled";

const Layout = ({ children, headerTitle }) => {
  const [open, setOpen] = useState(false);

  return (
    <ContainerStyle>
      <Navigation openMobileMenu={open} />

      <Body>
        <Header
          title={headerTitle}
          onClickBurgerButton={() => setOpen(!open)}
          openMobileMenu={open}
        />
        {children}
      </Body>
    </ContainerStyle>
  );
};

export default Layout;
