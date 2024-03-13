import { useContext } from "react";
import Comp1 from "../assets/comp1.jpg";
import Comp2 from "../assets/comp2.jpg";
import Comp3 from "../assets/comp3.jpg";
import { ThemeContext } from "../App";
import { ProductContext } from "../context/ProductContext";

export default function ProductPage() {
  const theme = useContext(ThemeContext);
  const infos = useContext(ProductContext);
  return (
    <>
      <div className="products-container">
        {infos.map((info) => {
          const image = info.image
          console.log(info.image);
          return (
            <div
              key={info.id}
              className={
                theme === "light"
                  ? "comp light-text light-border"
                  : "comp dark-text"
              }
            >
              <img src={`/src/assets/${image}`} alt={info.header} /> <h1>{info.header}</h1>
              <p>{info.title}</p>
              <h2>${+info.price}</h2>
              <button
                className={
                  theme === "light"
                    ? "button button1 dark light-border"
                    : "button button1 light light-border"
                }
              >
                Buy
              </button>
            </div>
          );
        })}

        
      </div>
    </>
  );
}
