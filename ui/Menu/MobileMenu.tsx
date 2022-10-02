import Link from "next/link";
import { ContainerMobile, ItemTitle, MenuItem } from "./styled";

export const MobileMenu = ({ openMobileMenu }) => {
  return (
    <ContainerMobile open={openMobileMenu}>
      <Link href="/">
        <MenuItem>Inicio</MenuItem>
      </Link>
      <Link href="/products">
        <MenuItem>Productos</MenuItem>
      </Link>
    </ContainerMobile>
  );
};
