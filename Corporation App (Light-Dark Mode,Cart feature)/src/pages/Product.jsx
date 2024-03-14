import { useContext } from "react";
import { ThemeContext } from "../App";
import { ProductContext } from "../context/ProductContext";

export default function ProductPage() {
  const theme = useContext(ThemeContext);
  const {products,addCartItem} = useContext(ProductContext);
  return (
    <>
      <div className="products-container">
        {products && products.map((product) => {
          const image = product.image
          return (
            <div
              key={product.id}
              className={
                theme === "light"
                  ? "comp light-text light-border"
                  : "comp dark-text light-border"
              }
            >
              <img src={`/src/assets/${image}`} alt={product.header} /> <h1>{product.header}</h1>
              <p>{product.title}</p>
              <h2>${+product.price}</h2>
              <button
              onClick={()=>addCartItem(product.id)}
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
