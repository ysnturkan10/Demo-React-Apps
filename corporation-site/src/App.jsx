import Header from "./components/Header";
import HomePage from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductPage from "./pages/Product";
import AboutPage from "./pages/About";
import { createContext, useState } from "react";
import SwitchButton from "./components/SwitchButton";
import ProductContextProvider from "./context/ProductContext";

export const ThemeContext = createContext("light");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/products", element: <ProductPage /> },
      { path: "/about-us", element: <AboutPage /> },
    ],
  },
]);
function App() {
  const [theme, setTheme] = useState("light");
  if (theme === "dark") {
    document.querySelector("body").style.background = "rgb(83, 83, 83)";
  } else {
    document.querySelector("body").style.background = "white";
  }

  function changeTheme() {
    let isChecked = document.getElementById("checkbox").checked;
    if (isChecked) {
      setTheme((pre) => (pre = "light"));
    } else {
      setTheme((pre) => (pre = "dark"));
    }
  }

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <ProductContextProvider>
          <SwitchButton changeTheme={changeTheme} />
          <RouterProvider router={router} />
        </ProductContextProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
