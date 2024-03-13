import { useContext } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { ThemeContext } from "../App";

export default function Header() {
  const theme = useContext(ThemeContext);
  return (
    <>
      <header id="header" className="">
        <h1
          className={theme === "dark" ? "main-title dark-text" : "main-title"}
        >
          Corporation
        </h1>
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
      <Outlet />
    </>
  );
}
