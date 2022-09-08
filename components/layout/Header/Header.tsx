import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { ButtonGoBack, Container, HeaderTitle } from ".";

const Header = ({ title }) => {
  const router = useRouter();

  return (
    <Container>
      <ButtonGoBack onClick={() => router.back()}>
        <ArrowLongLeftIcon width={25} />
      </ButtonGoBack>
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
};

export default Header;
