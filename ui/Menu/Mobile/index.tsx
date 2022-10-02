import Link from "next/link";
import { ContainerMobile, MenuItem } from "./styled";

export const MobileMenu = ({ openMobileMenu, items }) => {
  return (
    <ContainerMobile open={openMobileMenu}>
      {items.map(item => {
        return (
          <Link href={item.url}>
            <MenuItem>{item.title}</MenuItem>
          </Link>
        );
      })}
    </ContainerMobile>
  );
};
