import { UserButton } from "@clerk/nextjs";
import PrimaryButton from "../ui/PrimaryButton";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function NavBar() {
  return (
    <header className="sticky w-full top-0 left-0 bg-sec-background border-b border-b-color    h-[78px] container-layout  ">
      <div className="flex-between container m-auto">
        <Logo />
        <NavLinks />
        <div className="space-x-1">
          <UserButton afterSignOutUrl="/" />
          <PrimaryButton>SignUp</PrimaryButton>
          <PrimaryButton>Login</PrimaryButton>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
