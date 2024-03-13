import { useContext, useEffect, useRef } from "react";
import headerImg from "../assets/logo.jpg";
import Cart from "./Cart";
import { ProductContext } from "../context/productContext";
import { CartContext } from "../context/cartContext";

export default function Header() {
  const dialog = useRef();
  const { cartItems } = useContext(ProductContext);
  const { handleCartOpen, isCartOpen } = useContext(CartContext);
  const cartItemCount = cartItems && cartItems.length;

  function handleCart() {
    handleCartOpen();
  }
  useEffect(() => {
    const dialogCart = dialog.current;
    if (isCartOpen) {
      dialogCart.open();
    }

    return () => dialogCart.close();
  }, [isCartOpen]);

  return (
    <>
      <header id="main-header">
        <div id="title">
          <img src={headerImg} alt="react food logo" />
          <h1>REACTFOOD</h1>
        </div>

        <div className="cart-item-actions">
          <nav>
            <button onClick={handleCart}>Cart({cartItemCount})</button>
          </nav>
        </div>
      </header>
      <Cart ref={dialog} />
    </>
  );
}
