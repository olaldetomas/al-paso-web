import { DesktopMenu } from "../../ui/Menu/DesktopMenu";
import { MobileMenu } from "../../ui/Menu/MobileMenu";

const Navigation = ({ openMobileMenu }) => {
  return (
    <>
      <DesktopMenu />
      <MobileMenu openMobileMenu={openMobileMenu} />
    </>
  );
};

export default Navigation;
