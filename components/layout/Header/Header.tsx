import { ArrowLongLeftIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";
import { Container, HeaderTitle } from ".";
import { IconButton } from "../../../ui/buttons/IconButton";

const Header = ({ title }) => {
  const router = useRouter();

  return (
    <Container>
      <IconButton
        icon={<ArrowLongLeftIcon width={25} />}
        onClick={() => router.back()}
      ></IconButton>
      <HeaderTitle>{title}</HeaderTitle>
    </Container>
  );
};

export default Header;
