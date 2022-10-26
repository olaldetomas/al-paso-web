import {
  ArchiveBoxIcon,
  HomeIcon,
  ClipboardDocumentListIcon,
  CreditCardIcon,
  FaceSmileIcon,
  ArrowLeftOnRectangleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { type } from 'os';
import {
  ContainerDesktop,
  Logo,
  MenuItemContainer,
  ItemIcon,
  ItemTitle,
  LogOutIconContainer,
  LogOutIcon,
} from './styled';

interface Props {
  items: { url: string; title: string }[];
}

const DesktopMenu = ({ items }: Props) => {
  const router = useRouter();

  const getIconFromTitle = title => {
    switch (title) {
      case 'Inicio':
        return <HomeIcon height={20} />;
      case 'Productos':
        return <ArchiveBoxIcon height={20} />;
      case 'Menu':
        return <ClipboardDocumentListIcon height={20} />;
      case 'Ordenes':
        return <FaceSmileIcon height={20} />;
      case 'Pagos':
        return <CreditCardIcon height={20} />;
      default:
        return;
    }
  };

  const isActive = path => {
    return router.pathname == path ? 'active' : '';
  };

  return (
    <ContainerDesktop>
      <Logo />
      {items.map((item, index) => {
        return (
          <Link key={index} href={item.url}>
            <MenuItemContainer className={isActive(item.url)}>
              <ItemIcon>{getIconFromTitle(item.title)}</ItemIcon>
              <ItemTitle>{item.title}</ItemTitle>
            </MenuItemContainer>
          </Link>
        );
      })}
      <LogOutIconContainer>
        <LogOutIcon>
          <ArrowLeftOnRectangleIcon height={25} />
        </LogOutIcon>
      </LogOutIconContainer>
    </ContainerDesktop>
  );
};

export { DesktopMenu };
