import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const NavMenu = (
    <>
      <li>
        <Link href={"/dtf-custom-trasfer"}>DTF Custom Transfer</Link>
      </li>
      <li>
        <Link href={"/uv-dtf"}>UV DTF</Link>
      </li>
      <li>
        <Link href={"/blanks"}>Blanks</Link>
      </li>
      <li>
        <Link href={"/faq"}>FAQ</Link>
      </li>
      <li>
        <Link href={"/contact-us"}>Contact Us</Link>
      </li>
    </>
  );

  return (
    <>
      {/* Top Header */}
      <marquee
        loop={true}
        className="bg-[#bf2340] px-5 py-2 text-xl font-bold text-white m-0"
      >
        <span className="mr-8 my-0">
          Working Hours: 10:30 AM to 8:30 PM | Working Days: Saturday - Thursday
          | (B2B Only)
        </span>
        <span className="mr-8 my-0">
          Working Hours: 10:30 AM to 8:30 PM | Working Days: Saturday - Thursday
          | (B2B Only)
        </span>
        <span className="mr-8 my-0">
          Working Hours: 10:30 AM to 8:30 PM | Working Days: Saturday - Thursday
          | (B2B Only)
        </span>
      </marquee>
      <div className="bg-black px-5 py-2 text-md text-center font-bold text-white my-0">
        <p className="my-0">Acid Wash Drop is Back in Stock!</p>
      </div>
      {/* Navbar */}
      <nav className="navbar bg-white text-[#19191C] font-extrabold shadow-sm w-full px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-[#19191C] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {NavMenu}
            </ul>
          </div>
          <Link href={"/"}>
            <Image
              src={"/assets/logo.png"}
              width={100}
              height={80}
              alt="logo"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-lg">{NavMenu}</ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </nav>
    </>
  );
}
