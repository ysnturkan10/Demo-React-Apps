import { useContext } from "react";
import { ProductContext } from "../context/productContext";
import Alert from "./Alert";

export default function Product() {
  const { items, handleCartAdd, error, isLoading, isAdded } = useContext(
    ProductContext
  );

  if (error) {
    return <p className="center">{error} </p>;
  }

  return (
    <>
      {isAdded && <Alert />}

      <ul id="meals">
        {isLoading ? (
          <p className="center">Please wait...</p>
        ) : (
          items &&
          items.length >= 1 &&
          items.map((item, i) => {
            const itemId = item.id;
            return (
              <li className="meal-item" id={item.id} key={item.id}>
                <article>
                  <img
                    src={`http://localhost:3000/${item.image}`}
                    alt={item.name}
                  />
                  <div>
                    <h3>{item.name}</h3>
                    <p className="meal-item meal-item-price">
                      {`$ ${item.price}`}{" "}
                    </p>
                    <p className="meal-item article meal-item-description">
                      {item.description}{" "}
                    </p>
                  </div>
                  <p className="meal-item-actions">
                    <button
                      onClick={(e) => handleCartAdd(item, e)}
                      className="button"
                    >
                      Add to cart
                    </button>
                  </p>
                </article>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
}
