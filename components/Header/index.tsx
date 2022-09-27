import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { Container, HeaderTitle } from "./styled";
import { IconButton } from "../../ui/buttons";

const Header = ({ title }) => {
  const router = useRouter();

  return (
    <Container>
      <IconButton
        icon={<ArrowLongLeftIcon width={20} />}
        onClick={() => router.back()}
      ></IconButton>
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
};

export default Header;
