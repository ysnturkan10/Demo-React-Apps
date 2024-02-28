import { createContext, useReducer } from "react";

export const CartContext = createContext({
  isFormOpen: false,
  isCartOpen: false,
});

function cartContextReducer(state, action) {
  switch (action.type) {
    case "openCart": {
      return {
        isFormOpen: false,
        isCartOpen: true,
      };
    }

    case "openForm": {
      return {
        isFormOpen: true,
        isCartOpen: false,
      };
    }

    case "closeCart": {
      return {
        ...state,
        isCartOpen: false,
      };
    }

    case "closeForm": {
      return {
        ...state,
        isFormOpen: false,
      };
    }
  }
}

export default function CartContextProvider({ children }) {
  const [cartInfos, cartInfosDispatch] = useReducer(cartContextReducer, {
    isCartOpen: false,
    isFormOpen: false,
  });
  function handleCartOpen() {
    cartInfosDispatch({
      type: "openCart",
    });
  }

  function handleFormOpen() {
    cartInfosDispatch({
      type: "openForm",
    });
  }

  function handleCartClose() {
    cartInfosDispatch({
      type: "closeCart",
    });
  }

  function handleFormClose() {
    cartInfosDispatch({
      type: "closeForm",
    });
  }

  const cartCtxValue = {
    isFormOpen: cartInfos.isFormOpen,
    isCartOpen: cartInfos.isCartOpen,
    handleCartOpen,
    handleFormOpen,
    handleCartClose,
    handleFormClose,
  };
  console.log(cartInfos);
  return (
    <>
      <CartContext.Provider value={cartCtxValue}>
        {children}{" "}
      </CartContext.Provider>
    </>
  );
}
