import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { useContext, useState } from "react";
import { ShopContext } from "../context/ShopContextValue";
import Logo from '../myassets/SheShop.png'

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const { setShowSearch, getCartCount, isloggedIn, role, setIsLoggedIn } = useContext(ShopContext);
  console.log(role)
  console.log(isloggedIn)
  const logoutHandler = () => {
    localStorage.removeItem('userDetails');
    setIsLoggedIn(false);
    // setUserDetails(null);
    // navigate('/login');
  };
  return (
    <div className=" w-full sticky z-10 bg-white top-0">
      <div className="flex items-center justify-between px-3 py-3 font-medium">
        <Link to="/">
          <img src={Logo} alt="logo" className="h-24 p-3" />
        </Link>

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>HOME</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink
            to="/collection"
            className="flex flex-col items-center gap-1"
          >
            <p>COLLECTION</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>ABOUT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>CONTACT</p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        </ul>

        <div className="flex items-center gap-6">
          <img
            onClick={() => {
              setShowSearch(true);
            }}
            src={assets.search_icon}
            alt=""
            className="w-5 cursor-pointer "
          />
          <div className="group relative">
            <Link to="/login">
              <img
                src={assets.profile_icon}
                alt=""
                className="w-5 cursor-pointer"
              />
              {isloggedIn && (
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">My Profile</p>
                <Link to="/orders" className="cursor-pointer hover:text-black">
                  Orders
                </Link>
                {(role=='Seller') && <Link to="/list-products" className="cursor-pointer hover:text-black">
                  <p>List Products</p>
                  </Link>}
                  <button
            onClick={logoutHandler}
            className="mt-6 px-6 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
          >
            Logout
          </button>

              </div>
            </div>
          )}
            </Link>
          </div>
        

        <Link to="/cart" className="relative ">
          <img src={assets.cart_icon} alt="" className="w-5 min-w-5 " />
          <p className="absolute right-[-6px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        <img
          src={assets.menu_icon}
          alt=""
          className="w-5 cursor-pointer sm:hidden "
          onClick={() => setVisible(!visible)} //visibility toggle (true/false))
        />
      </div>
      </div>
              
      {/* Sidebar menu for small screens */}
      <div
        className={`absolute top-0 right-0 bottom-0 overflow-hidden z-51 bg-white ease-in duration-300
             ${visible ? "w-full sticky" : "w-0"}`}
      >
        <div className="flex flex-col text-gray-600 ">
          <div
            onClick={() => {
              setVisible(false);
            }}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img src={assets.dropdown_icon} alt="" className="h-4 rotate-180" />
            <p className="font-semibold">Back</p>
          </div>

          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/"
          >
            {" "}
            HOME{" "}
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/collection"
          >
            {" "}
            COLLECTION{" "}
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/about"
          >
            {" "}
            ABOUT{" "}
          </NavLink>
          <NavLink
            onClick={() => {
              setVisible(false);
            }}
            className="py-2 pl-6 border"
            to="/contact"
          >
            {" "}
            CONTACT{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
