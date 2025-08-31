import { HiBars3, HiOutlineUser, HiOutlineMagnifyingGlass, HiOutlineShoppingBag } from "react-icons/hi2";
import { Link } from "react-router-dom";
import SidebarMenu from "./SidebarMenu";
import { useState } from "react";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 bg-white max-w-screen-2xl flex justify-between items-center py-4 px-5 text-black mx-auto max-sm:px-5 max-[400px]:px-3 shadow-sm">
        {/* Sidebar Menu Icon */}
        <HiBars3
          className="text-2xl max-sm:text-xl mr-20 max-lg:mr-0 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:text-gray-600"
          onClick={() => setIsSidebarOpen(true)}
        />

        {/* Brand Name XORIX with underline animation */}
        <Link
          to="/"
          className="text-4xl font-bold tracking-[1.08px] max-sm:text-3xl max-[400px]:text-2xl relative group"
        >
          XORIX
          <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-black transition-all duration-500 group-hover:w-full"></span>
        </Link>

        {/* Right Icons */}
        <div className="flex gap-4 items-center max-sm:gap-2">
          <Link to="/search">
            <HiOutlineMagnifyingGlass className="text-2xl max-sm:text-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:text-gray-600" />
          </Link>
          <Link to="/login">
            <HiOutlineUser className="text-2xl max-sm:text-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:text-gray-600" />
          </Link>
          <Link to="/cart">
            <HiOutlineShoppingBag className="text-2xl max-sm:text-xl cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:text-gray-600" />
          </Link>
        </div>
      </header>

      {/* Sidebar Menu Component */}
      <SidebarMenu
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
    </>
  );
};

export default Header;
