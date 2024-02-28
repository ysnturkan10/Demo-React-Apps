import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { CartContext } from "../context/cartContext";
import { formattedPrice } from "../functions/currencyFunction";
import Input from "./Input";
import { ProductContext } from "../context/productContext";

const FormPage = forwardRef(function ({ totalPrice }, ref) {
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState()

const {cartItems}=useContext(ProductContext)
  const modal = useRef();
  const { isFormOpen, handleFormClose } = useContext(CartContext);
  useImperativeHandle(
    ref,
    () => {
      return {
        openForm: () => {
          modal.current.showModal();
        },
        closeForm: () => {
          modal.current.close();
        },
      };
    },
    []
  );

  function handleSubmit(e) {
    e.preventDefault();
    

   async function postData(){
    const fd = new FormData(e.target);
    const formData = Object.fromEntries(fd.entries());
    setIsLoading(true)
    try {
        const response =await fetch("http://localhost:3000/orders",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            order:{
                items:cartItems,
                customer:formData
            }
        })
    })
    if(!response.ok){
        throw Error("Failed to get your order:(")
    }
    } catch (error) {
       setError(error.message)
    }
   
   }
   postData()
   setIsLoading(false)
  }
  function handleForm(){
    if(!error.message){
     return
    }
    handleFormClose()
    setError(false)
 
  }
  function handleClose(){
    handleFormClose()
    setError(false)
  }

//   useEffect(()=>{
//     postData()
//   },[])
  return (
    <>
      <dialog className="modal" ref={modal} onClose={handleForm}>
      { !isLoading ? <>
        <form onSubmit={handleSubmit}>
          <h2>Checkout</h2>
          <p>Total price: {formattedPrice.format(totalPrice)}</p>

          <Input label="Full Name" id="name" type="text" />
          <Input label="Email Address" id="email" type="email" />
          <Input label="Street" id="street" type="text" />
          <div className="control-row">
            <Input label="Postal Code" id="postal-code" type="text" />
            <Input label="City" id="city" type="text" />
          </div>

          
          <div className="modal-actions">
             <button
              type="button"
              onClick={handleClose}
              className="text-button"
            >
              Close
            </button>
            {!error ?<button onClick={handleForm} className="button">Checkout</button>: <p className="formError">{error} </p> }
          </div>
        </form>
        </>: <p>Your order is preparing please wait... </p>
    }
      </dialog>
    
    </>
  );
});
export default FormPage;
