import { useContext } from "react";
import { ProductContext } from "../context/productContext";

export default function CartItem({ cartItem }) {
  const { decreaseButton, increaseButton } = useContext(ProductContext);

  return (
    <li className="cart-item">
      <div>
        <p>
          {cartItem.name}
          {` $ ${cartItem.price}`}{" "}
        </p>
      </div>
      <div className="cart-item-actions">
        <button
          onClick={() => decreaseButton(cartItem)}
          className="text-button"
        >
          -
        </button>

        <p> {cartItem.quantity} </p>
        <button
          onClick={() => increaseButton(cartItem)}
          className="text-button"
        >
          +
        </button>
      </div>
    </li>
  );
}
