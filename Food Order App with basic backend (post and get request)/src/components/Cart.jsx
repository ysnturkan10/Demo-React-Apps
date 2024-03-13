import {
  useRef,
  useContext,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
import { ProductContext } from "../context/productContext";
import CartItem from "./CartItem";
import { formattedPrice } from "../functions/currencyFunction";
import { CartContext } from "../context/cartContext";
import FormPage from "./FormPage";

const Cart = forwardRef(function ({}, ref) {
  const { cartItems } = useContext(ProductContext);
  const {
    isCartOpen,
    handleFormOpen,
    handleCartClose,
    isFormOpen,
  } = useContext(CartContext);
  const dialog = useRef();
  const modal = useRef();

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

  useEffect(() => {
    const modalForm = modal.current;
    if (isFormOpen) {
      modalForm.openForm();
    }
    return () => modalForm.closeForm();
  }, [isFormOpen]);

  const totalPrice =
    cartItems &&
    cartItems.reduce((acc, item) => {
      return (acc += Math.round(+item.price) * item.quantity);
    }, 0);

  return (
    <>
      <dialog className="modal" ref={dialog} onClose={handleCartClose}>
        <div className="cart">
          <h2>Your Cart</h2>

          <ul>
            {cartItems && cartItems.length >= 1 ? (
              cartItems.map((cartItem, i) => {
                return <CartItem key={Math.random()} cartItem={cartItem} />;
              })
            ) : (
              <p>Your cart is empty</p>
            )}
          </ul>
          <div className="cart-total">
            <p>{formattedPrice.format(totalPrice)} </p>
          </div>
          <div className="modal-actions">
            <button onClick={handleCartClose} className="text-button">
              Close
            </button>
            <button onClick={handleFormOpen} className="button">
              Go to checkout
            </button>
          </div>
        </div>
      </dialog>
      <FormPage ref={modal} totalPrice={totalPrice} />
    </>
  );
});

export default Cart;
