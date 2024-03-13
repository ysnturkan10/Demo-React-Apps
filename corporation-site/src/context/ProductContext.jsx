import { createContext, useReducer } from "react";
const PRODUCT_INFOS=[
    {
      id: "c1",
      header:"Computer X",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, voluptate nisi minima sed consectetur quia saepe reprehenderit. Laborum, earum eaque perspiciatis distinctio commodi, suscipit odit dignissimos aut debitis, voluptas fugit!",
      image: "comp1.jpg",
      price:499
    },
    {
      id: "c2",
      header:"Computer Y",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, voluptate nisi minima sed consectetur quia saepe reprehenderit. Laborum, earum eaque perspiciatis distinctio commodi, suscipit odit dignissimos aut debitis, voluptas fugit!",
      image: "comp2.jpg",
      price:799
    },
    {
      id: "c3",
      header:"Computer Z",
      title:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, voluptate nisi minima sed consectetur quia saepe reprehenderit. Laborum, earum eaque perspiciatis distinctio commodi, suscipit odit dignissimos aut debitis, voluptas fugit!",
      image: "comp3.jpg",
      price:899
    },
  ]
export const ProductContext = createContext(PRODUCT_INFOS);

const contextReducer = ()=>{

}


export default function ProductContextProvider({children}){
    const [productInfos,productInfosDispatch]= useReducer(contextReducer,PRODUCT_INFOS)

    const addCartItem = ()=>{

    }

    return<>
    <ProductContext.Provider value={productInfos}>{children} </ProductContext.Provider>

    </>
}