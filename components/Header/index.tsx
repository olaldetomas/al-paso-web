import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/router';
import { Container, HeaderTitle } from './styled';
import { BurgerButton } from '../../ui/Buttons/Burger';
import { IconButton } from '../../ui/Buttons';

const Header = ({ title, onClickBurgerButton, openMobileMenu }) => {
  const router = useRouter();

  return (
    <Container>
      <IconButton
        icon={<ArrowLongLeftIcon width={20} />}
        onClick={() => router.back()}
        secondary
      ></IconButton>
      <HeaderTitle>{title}</HeaderTitle>
      <BurgerButton
        openMobileMenu={openMobileMenu}
        onClick={onClickBurgerButton}
      />
    </Container>
  );
};

export default Header;
