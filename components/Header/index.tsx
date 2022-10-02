import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { Container, HeaderTitle } from "./styled";
import { IconButton } from "../../ui/Buttons";
import { BurgerButton } from "../../ui/Buttons/Burger";

const Header = ({ title, onClickBurgerButton, openMobileMenu }) => {
  const router = useRouter();

  return (
    <Container>
      <IconButton
        icon={<ArrowLongLeftIcon width={20} />}
        onClick={() => router.back()}
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
