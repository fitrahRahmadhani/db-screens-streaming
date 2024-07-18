import Logo from "./Logo";
import MobileNavbar from "./MobileNavbar";
import Navbar from "./Navbar";

function Header() {
  return (
    <header className="w-full absolute top-0 z-10">
      <div className=" max-w-[1920px] bg-gradient-to-b from-[#000000] to-slate-950/0 flex items-center mx-auto justify-between py-5 px-10">
        <Logo />
        <Navbar />
        <p className="hidden lg:block">Ini adalah komponen search</p>
        <MobileNavbar />
      </div>
    </header>
  );
}

export default Header;
