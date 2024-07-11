import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="max-w-[1920px] flex items-center mx-auto justify-between py-5 px-5">
      <Logo />
      <Navbar />
      <p className="hidden lg:block">Ini adalah komponen search</p>
      <MobileNavbar />
    </header>
  );
}

export default Header;
