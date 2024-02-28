import Product from "./components/Product";
import Header from "./components/Header";
import ProductContextProvider from "./context/productContext";
import FormPage from "./components/FormPage";
import CartContextProvider from "./context/cartContext";

function App() {
  return (
    <>
      <CartContextProvider>
        <ProductContextProvider>
          <Header />

          <Product />
        </ProductContextProvider>
      </CartContextProvider>
    </>
  );
}

export default App;
