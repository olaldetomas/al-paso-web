import styled from "styled-components";
import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";

const Container = styled.header`
  display: flex;
  height: 90px;
  width: 100%;
  margin-bottom: 20px;
  align-items: center;
  padding-left: 40px;
  padding-right: 40px;
`;

const ButtonGoBack = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  box-shadow: ${({ theme }) => theme.shadow.sm};
  border-radius: ${({ theme }) => theme.rounded.md};
  background-color: ${({ theme }) => theme.colors.g3};
  color: ${({ theme }) => theme.colors.g6};
  border: 0;
  cursor: pointer;
  :hover {
    opacity: 0.7;
  }
`;

const HeaderTitle = styled.h1`
  color: ${({ theme }) => theme.colors.g7};
  font-size: 18px;
  font-weight: 400;
  margin-left: 15px;
`;

// const Profile = styled.div`
//   display: flex;
//   width: 60px;
//   height: 60px;
//   border-radius: 100%;
//   margin-left: auto;
//   background-color: brown;
// `;

const Header = ({ title }) => {
  return (
    <Container>
      <ButtonGoBack>
        <ArrowLongLeftIcon width={25} />
      </ButtonGoBack>
      <HeaderTitle>Inicio</HeaderTitle>
    </Container>
  );
};

export default Header;
