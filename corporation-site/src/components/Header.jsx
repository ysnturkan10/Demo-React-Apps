import { useContext, useRef } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { ThemeContext } from "../App";
import Cart from "./Cart";
import { ProductContext } from "../context/ProductContext";

export default function Header() {
  const theme = useContext(ThemeContext);
  const {cartItems} = useContext(ProductContext)
  const dialog = useRef()
const cartCount = cartItems && cartItems.length
  function dialogHandle(){
    dialog.current.open()
  }
  return (
    <>
      <header id="header" className="">
        <h1
          className={theme === "dark" ? "main-title dark-text" : "main-title"}
        >
          Corporation
        </h1>
        <div className="cartButton">
          <div>
          <button
          onClick={dialogHandle}
            className={theme === "light" ? "cart-btn light-text" : "cart-btn dark-text"}
          >
            {" "}
            Cart({cartCount})
          </button>{" "}
          </div>
        </div>

        <ul>
          <li>
            <NavLink
              className={({ isActive }) => {
                if (isActive && theme === "light") {
                  return "active light";
                } else if (isActive && theme === "dark") {
                  return "active dark";
                } else if (!isActive && theme === "light") {
                  return "light-text";
                } else if (!isActive && theme === "dark") {
                  return "dark-text";
                }
              }}
              to="/"
            >
              {" "}
              Home{" "}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                if (isActive && theme === "light") {
                  return "active light";
                } else if (isActive && theme === "dark") {
                  return "active dark";
                } else if (!isActive && theme === "light") {
                  return "light-text";
                } else if (!isActive && theme === "dark") {
                  return "dark-text";
                }
              }}
              to="/products"
            >
              {" "}
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => {
                if (isActive && theme === "light") {
                  return "active light";
                } else if (isActive && theme === "dark") {
                  return "active dark";
                } else if (!isActive && theme === "light") {
                  return "light-text";
                } else if (!isActive && theme === "dark") {
                  return "dark-text";
                }
              }}
              to="/about-us"
            >
              {" "}
              About us
            </NavLink>
          </li>
        </ul>
      </header>
      <Cart ref={dialog}/>

      <Outlet />
    </>
  );
}
