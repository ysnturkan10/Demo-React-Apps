import { forwardRef, useContext, useImperativeHandle, useRef } from "react";
import { ThemeContext } from "../App";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";

const Cart = forwardRef(function (props, ref) {
  const theme = useContext(ThemeContext);
  const { cartItems, increaseQuantity, decreaseQuantity } = useContext(
    ProductContext
  );
  const dialog = useRef();
  const navigate = useNavigate();

  const totalPrice = cartItems.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * currentValue.quantity,
    0
  );

  useImperativeHandle(
    ref,
    () => {
      return {
        open: () => {
          dialog.current.showModal();
        },
        close: () => {
          dialog.current.close();
        },
      };
    },
    []
  );

  function navigateToProducts() {
    navigate("/products");
    dialog.current.close();
  }
  return (
    <dialog ref={dialog}>
      <div
        className={
          theme === "light" ? "light light-border" : "dark dark-border"
        }
        id="cart"
      >
        <button
          onClick={() => dialog.current.close()}
          className={
            theme === "light"
              ? "button button1 cancel-btn light"
              : "button button1 cancel-btn dark"
          }
        >
          x
        </button>
        <h2>Your Cart</h2>
        {cartItems && cartItems.length == 0 ? (
          <>
            {" "}
            <p style={{ textAlign: "center", marginBottom: "5rem" }}>
              Your cart is empty
            </p>
            <p>
              <button
                className={
                  theme === "light"
                    ? "button button1 dark"
                    : "button button1 light"
                }
                onClick={navigateToProducts}
              >
                {" "}
                Go to product page{" "}
              </button>
              and buy a brand new computer!
            </p>
          </>
        ) : (
          <ul>
            {cartItems &&
              cartItems.map((cartItem) => {
                return (
                  <li key={cartItem.id + "c"}>
                    <p style={{ marginRight: "1rem" }}>
                      {cartItem.header} -(${+cartItem.price})-
                    </p>{" "}
                    <div>
                      <button
                        onClick={() => decreaseQuantity(cartItem.id)}
                        className="button button1 dark"
                      >
                        -
                      </button>
                      <span> {cartItem.quantity}</span>{" "}
                      <button
                        onClick={() => increaseQuantity(cartItem.id)}
                        className="button button1 dark"
                      >
                        +
                      </button>
                    </div>{" "}
                  </li>
                );
              })}
            <p style={{ marginTop: "2rem", textAlign: "center" }}>
              Total Price:${totalPrice}
            </p>
          </ul>
        )}
      </div>
    </dialog>
  );
});

export default Cart;
