import { createContext, useReducer, useEffect, useState } from "react";
export const ProductContext = createContext({
  items: [],
  cartItems: [],
  error: false,
  isAdded: false,
});
function productInfosReducer(state, action) {
  switch (action.type) {
    case "fetch": {
      return {
        ...state,
        items: action.payload,
      };
    }

    case "addToCart": {
      const cartItem = action.payload;
      const currentIndex = state.items.findIndex(
        (element) => element.id == action.payload.id
      );
      const updatedCartItem = {
        ...cartItem,
        quantity: state.items[currentIndex].quantity + 1,
      };
      return {
        ...state,
        cartItems: [...state.cartItems, updatedCartItem],
        isAdded: false,
      };
    }

    case "increaseButton": {
      const currentIndex = state.cartItems.findIndex(
        (element) => element.id == action.payload.id
      );
      const cartItemsClone = structuredClone(state.cartItems);

      cartItemsClone[currentIndex] = {
        ...cartItemsClone[currentIndex],
        quantity: cartItemsClone[currentIndex].quantity + 1,
      };

      return {
        ...state,
        // cartItems: [...state.cartItems],
        cartItems: [...cartItemsClone],
      };
    }

    case "decreaseButton": {
      const currentIndex = state.cartItems.findIndex(
        (element) => element.id === action.payload.id
      );
      if (currentIndex > -1) {
        if (state.cartItems[currentIndex].quantity > 1) {
          state.cartItems[currentIndex] = {
            ...state.cartItems[currentIndex],
            quantity: state.cartItems[currentIndex].quantity - 1,
          };
        } else {
          state.cartItems.splice(currentIndex, 1);
        }
      }

      return {
        ...state,
        cartItems: [...state.cartItems],
      };
    }
    case "error": {
      return {
        ...state,
        error: action.payload,
      };
    }
    case "loading": {
      return {
        ...state,
        isLoadingg: true,
      };
    }
    case "loaded": {
      return {
        ...state,
        isLoadingg: false,
      };
    }
    case "goToCart": {
      return {
        ...state,
        isAdded: true,
      };
    }

    case "closeAlert": {
      return {
        ...state,
        isAdded: false,
      };
    }

    default: {
      state;
    }
  }
}

export default function ProductContextProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [productInfos, productInfosDispatch] = useReducer(productInfosReducer, {
    items: [],
    cartItems: [],
    error: false,
    isAdded: false,
  });
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const data = await response.json();
        if (!response.ok) {
          throw new Error("Failed to fetch foods");
        }
        productInfosDispatch({ type: "fetch", payload: data });
      } catch (error) {
        console.log(error.message || "fail");
        productInfosDispatch({
          type: "error",
          payload: error.message,
        });
      }
    }
    getProducts();
    setLoading(false);
  }, []);

  console.log(loading);

  function handleAddCartItem(food, e) {
    const isInclude = productInfos.cartItems.filter(
      (item) => item.id === food.id
    );
    if (isInclude.length == 0) {
      productInfosDispatch({
        type: "addToCart",
        payload: food,
      });
    } else {
      productInfosDispatch({
        type: "goToCart",
      });
    }

    // e.currentTarget.disabled = true;
  }
  function decreaseCartItemQuantity(item) {
    productInfosDispatch({
      type: "decreaseButton",
      payload: item,
    });
  }

  function increaseCartItemQuantity(item) {
    productInfosDispatch({
      type: "increaseButton",
      payload: item,
    });
  }

  function closeAlert() {
    productInfosDispatch({
      type: "closeAlert",
    });
  }
  const ctxValue = {
    items: productInfos.items,
    cartItems: productInfos.cartItems,
    handleCartAdd: handleAddCartItem,
    decreaseButton: decreaseCartItemQuantity,
    increaseButton: increaseCartItemQuantity,
    error: productInfos.error,
    isLoading: loading,
    isAdded: productInfos.isAdded,
    closeAlert,
  };
  return (
    <>
      <ProductContext.Provider value={ctxValue}>
        {children}
      </ProductContext.Provider>
    </>
  );
}
