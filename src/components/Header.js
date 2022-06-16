import React from "react";
import "./header.scss";
import logo from "../assets/625452457cc77f7f28839dd9_logo.svg";
function Header() {
  return (
    <header className="max-w-[1450px] mx-auto">
      <nav className="nav px-[65px]  my-0 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-1.5 py-[20px] ">
          <img src={logo} alt="logo" />
          <p className="logo text-[#5C6871] font-medium  md:hidden">Concord Studio®</p>
          <p className="logo text-[#939BA0]  md:hidden">Digital agency, reinvented</p>
        </div>
        <a
          href="#getstarted"
          className="nav-btn bg-[#06c] rounded-[20px] text-[16px] text-white py-1.5 px-3.5 font-normal duration-[200ms]"
        >
          Get started
        </a>
      </nav>
    </header>
  );
}

export default Header;
