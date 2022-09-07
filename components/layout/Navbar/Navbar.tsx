import {
  ArchiveBoxIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  FaceSmileIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import {
  Container,
  ItemIcon,
  ItemTitle,
  Logo,
  LogOutIcon,
  LogOutIconContainer,
  MenuItemContainer,
} from ".";

const Navbar = () => {
  return (
    <Container>
      <Logo />
      <Link href="/">
        <MenuItemContainer>
          <ItemIcon>
            <HomeIcon height={25} />
          </ItemIcon>
          <ItemTitle>Inicio</ItemTitle>
        </MenuItemContainer>
      </Link>

      <Link href="/products">
        <MenuItemContainer>
          <ItemIcon>
            <ArchiveBoxIcon height={25} />
          </ItemIcon>
          <ItemTitle>Productos</ItemTitle>
        </MenuItemContainer>
      </Link>

      <Link href="/menu">
        <MenuItemContainer>
          <ItemIcon>
            <ClipboardDocumentListIcon height={25} />
          </ItemIcon>
          <ItemTitle>Menu</ItemTitle>
        </MenuItemContainer>
      </Link>

      <Link href="/orders">
        <MenuItemContainer>
          <ItemIcon>
            <FaceSmileIcon height={25} />
          </ItemIcon>
          <ItemTitle>Ordenes</ItemTitle>
        </MenuItemContainer>
      </Link>

      <Link href="/payments">
        <MenuItemContainer>
          <ItemIcon>
            <CreditCardIcon height={25} />
          </ItemIcon>
          <ItemTitle>Pagos</ItemTitle>
        </MenuItemContainer>
      </Link>

      <LogOutIconContainer>
        <LogOutIcon>
          <ArrowLeftOnRectangleIcon height={30} />
        </LogOutIcon>
      </LogOutIconContainer>
    </Container>
  );
};

export default Navbar;
