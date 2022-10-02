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
  ContainerDesktop,
  ItemIcon,
  ItemTitle,
  Logo,
  LogOutIcon,
  LogOutIconContainer,
  MenuItemContainer,
} from "./styled";

export function DesktopMenu() {
  const router = useRouter();

  const isActive = path => {
    console.log(router.pathname);
    return router.pathname == path ? "active" : "";
  };

  return (
    <ContainerDesktop>
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
    </ContainerDesktop>
  );
}
