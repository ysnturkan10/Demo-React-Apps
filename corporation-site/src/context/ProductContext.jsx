import { createContext, useReducer } from "react";
const inintialArg = {
  products: [
    {
      id: "c1",
      header: "Computer X",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, voluptate nisi minima sed consectetur quia saepe reprehenderit. Laborum, earum eaque perspiciatis distinctio commodi, suscipit odit dignissimos aut debitis, voluptas fugit!",
      image: "comp1.jpg",
      price: 499,
    },
    {
      id: "c2",
      header: "Computer Y",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, voluptate nisi minima sed consectetur quia saepe reprehenderit. Laborum, earum eaque perspiciatis distinctio commodi, suscipit odit dignissimos aut debitis, voluptas fugit!",
      image: "comp2.jpg",
      price: 799,
    },
    {
      id: "c3",
      header: "Computer Z",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, voluptate nisi minima sed consectetur quia saepe reprehenderit. Laborum, earum eaque perspiciatis distinctio commodi, suscipit odit dignissimos aut debitis, voluptas fugit!",
      image: "comp3.jpg",
      price: 899,
    },
  ],
  cartItems: [],
};
export const ProductContext = createContext(inintialArg);

const contextReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CART_ITEM": {
      const id = action.payload;
      const newCartItem = state.products.filter((product) => product.id === id);
      const newCartItemInfo = newCartItem[0];
      const lastCartItem = { ...newCartItemInfo, quantity: 1 };
      const isInclude = state.cartItems.filter((cartItem)=>cartItem.id === id).length===0
      if(isInclude){
        return {
          ...state,
          cartItems: [...state.cartItems, lastCartItem],
        };
      }else{
        return{
          ...state
        }
      }
     
    }
    case "INCREASE_QUANTITY":{
      const id = action.payload
      const currentItemIndex = state.cartItems.findIndex((cartItem)=> cartItem.id=== id)
      console.log(currentItemIndex);
      const copyCartItems = structuredClone(state.cartItems)
      console.log(typeof copyCartItems[currentItemIndex].quantity)
      copyCartItems[currentItemIndex].quantity+=1
      console.log(copyCartItems);
      
      
      

       return{
        ...state,
          cartItems:copyCartItems
       }
    }
    case "DECREASE_QUANTITY":{
      const id = action.payload
      const currentItemIndex = state.cartItems.findIndex((cartItem)=> cartItem.id=== id)
      console.log(currentItemIndex);
      let copyCartItems = structuredClone(state.cartItems)
      if(state.cartItems[currentItemIndex].quantity == 1){
       copyCartItems = copyCartItems.filter((cartItem)=> cartItem.id!==id)
      }else{
        copyCartItems[currentItemIndex].quantity-=1

      }
      console.log(copyCartItems);
      
      
      

       return{
        ...state,
          cartItems:copyCartItems
       }
    }
  }
};

export default function ProductContextProvider({ children }) {
  const [productInfos, productInfosDispatch] = useReducer(
    contextReducer,
    inintialArg
  );

  const addCartItem = (id) => {
    productInfosDispatch({
      type: "ADD_CART_ITEM",
      payload: id,
    });
  };

  const increaseQuantity = (id) => {
    productInfosDispatch({
      type: "INCREASE_QUANTITY",
      payload: id,
    });
  };
  const decreaseQuantity = (id) => {
    productInfosDispatch({
      type: "DECREASE_QUANTITY",
      payload: id,
    });
  };
  const productContext = {
    addCartItem,
    decreaseQuantity,
    increaseQuantity,
    products: productInfos.products,
    cartItems: productInfos.cartItems,
  };
  console.log(productInfos.cartItems);
  return (
    <>
      <ProductContext.Provider value={productContext}>
        {children}{" "}
      </ProductContext.Provider>
    </>
  );
}
