import styled from "styled-components";
import { ArchiveBoxIcon } from "@heroicons/react/24/solid";

const Container = styled.nav`
  display: flex;
  background-color: #979797;
  width: 290px;
  height: 100vh;
  justify-content: center;
  padding-top: 20px;
`;

const NavbarItem = styled.a`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
  width: 250px;
  border-radius: ${({ theme }) => theme.rounded.sm};
  background-color: aquamarine;
  padding-left: 20px;
  cursor: pointer;
`;

const NavbarItemTitle = styled.h4`
  font-weight: 500;
  margin-left: 20px;
`;

const Navbar = () => {
  return (
    <Container>
      <NavbarItem>
        <ArchiveBoxIcon height={25} />
        <NavbarItemTitle>Productos</NavbarItemTitle>
      </NavbarItem>
    </Container>
  );
};

export default Navbar;
