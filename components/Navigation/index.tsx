import { DesktopMenu } from '../../ui/Menu/Desktop';
import { MobileMenu } from '../../ui/Menu/Mobile';

const menuItems = [
  {
    url: '/',
    title: 'Inicio',
  },
  {
    url: '/products',
    title: 'Productos',
  },
  {
    url: '/menu',
    title: 'Menu',
  },
  {
    url: '/orders',
    title: 'Ordenes',
  },
  {
    url: '/payments',
    title: 'Pagos',
  },
];

const Navigation = ({ openMobileMenu }) => {
  return (
    <>
      <DesktopMenu items={menuItems} />
      <MobileMenu items={menuItems} openMobileMenu={openMobileMenu} />
    </>
  );
};

export default Navigation;
