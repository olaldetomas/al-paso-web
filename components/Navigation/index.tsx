import {
  ArchiveBoxIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  FaceSmileIcon,
  ArrowLeftOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  Container,
  ItemIcon,
  ItemTitle,
  Logo,
  LogOutIcon,
  LogOutIconContainer,
  MenuItemContainer,
} from "./styled";

const Navigation = () => {
  const router = useRouter();

  const isActive = path => (router.pathname == path ? "active" : "");

  return (
    <Container>
      <Logo />
      <Link href="/">
        <MenuItemContainer className={isActive("/")}>
          <ItemIcon>
            <HomeIcon height={20} />
          </ItemIcon>
          <ItemTitle>Inicio</ItemTitle>
        </MenuItemContainer>
      </Link>

      <Link href="/products">
        <MenuItemContainer className={isActive("/products")}>
          <ItemIcon>
            <ArchiveBoxIcon height={20} />
          </ItemIcon>
          <ItemTitle>Productos</ItemTitle>
        </MenuItemContainer>
      </Link>

      <Link href="/menu">
        <MenuItemContainer className={isActive("/menu")}>
          <ItemIcon>
            <ClipboardDocumentListIcon height={20} />
          </ItemIcon>
          <ItemTitle>Menu</ItemTitle>
        </MenuItemContainer>
      </Link>

      <Link href="/orders">
        <MenuItemContainer className={isActive("/orders")}>
          <ItemIcon>
            <FaceSmileIcon height={20} />
          </ItemIcon>
          <ItemTitle>Ordenes</ItemTitle>
        </MenuItemContainer>
      </Link>

      <Link href="/payments">
        <MenuItemContainer className={isActive("/payments")}>
          <ItemIcon>
            <CreditCardIcon height={20} />
          </ItemIcon>
          <ItemTitle>Pagos</ItemTitle>
        </MenuItemContainer>
      </Link>

      <LogOutIconContainer>
        <LogOutIcon>
          <ArrowLeftOnRectangleIcon height={25} />
        </LogOutIcon>
      </LogOutIconContainer>
    </Container>
  );
};

export default Navigation;
