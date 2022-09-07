import React from "react";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import styled from "styled-components";

const ContainerStyle = styled.div`
  display: flex;
`;

const Container = ({ children }) => {
  return (
    <ContainerStyle>
      <Navbar />
      <Header />
    </ContainerStyle>
  );
};

export default Container;
