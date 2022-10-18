import Link from 'next/link';
import { ContainerMobile, MenuItem } from './styled';

export const MobileMenu = ({ openMobileMenu, items }) => {
  return (
    <ContainerMobile open={openMobileMenu}>
      {items.map((item, index) => {
        return (
          <Link key={index} href={item.url}>
            <MenuItem>{item.title}</MenuItem>
          </Link>
        );
      })}
    </ContainerMobile>
  );
};
