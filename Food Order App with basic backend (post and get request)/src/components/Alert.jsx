import { useContext, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { ProductContext } from "../context/productContext";

export default function Alert() {
  const { closeAlert, isAdded } = useContext(ProductContext);
  const dialog = useRef();
  useEffect(() => {
    if (isAdded) {
      dialog.current.showModal();
    }
    return () => closeAlert();
  }, [isAdded]);

  return createPortal(
    <>
      <dialog className="alert" ref={dialog}>
        <span className="closebtn" onClick={closeAlert}>
          &times;
        </span>
        You've already added this product to your cart. <br /> If you buy one
        more go to your cart.
      </dialog>
    </>,
    document.getElementById("alert")
  );
}
