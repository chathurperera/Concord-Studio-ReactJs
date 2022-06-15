import React from "react";
import "./header.scss";
import logo from "../assets/625452457cc77f7f28839dd9_logo.svg";
function Header() {
  return (
    <header>
      <nav className="nav my-0 mx-auto flex items-center justify-between">
        <div className="flex items-center gap-1.5 py-[20px] ">
          <img src={logo} alt="logo" />
          <p className="logo text-[#5C6871] font-medium hidden md:block">Concord Studio®</p>
          <p className="logo text-[#939BA0] hidden md:block">Digital agency, reinvented</p>
        </div>
        <a
          href="#getstarted"
          className="nav-btn bg-[#06c] rounded-[20px] text-[16px] text-white py-1.5 px-3.5 font-normal"
        >
          Get started
        </a>
      </nav>
    </header>
  );
}

export default Header;
