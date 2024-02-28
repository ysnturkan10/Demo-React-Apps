import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal"
export default function NewProject( {onAdd,onCancel} ){
    const modal = useRef()
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()


    function handleSave(){
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;

        if(
            enteredTitle.trim()==="" ||
            enteredDescription.trim()==="" ||
            enteredDueDate.trim()==="" 

        ){
            modal.current.open();
            return
        }

        onAdd({
            title:enteredTitle,
            description:enteredDescription,
            dueDate:enteredDueDate
        })
    }

    return(
        <>
        <Modal ref={modal} buttonTitle="close" >
            <h2 className="text-xl font-bold text-stone-500 my-4">Invalid Input</h2>
            <p className="text-stone-500 mb-4">You forgot to enter a value.</p>
            <p className="text-stone-500 mb-4">Please enter valid inputs for every input fields.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button onClick={onCancel} className="text-stone-600 hover:text-stone-950">Cancel</button></li>
                <li><button onClick={handleSave} className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950">Save</button></li>

            </menu>
            <div>
               <Input type="title" ref={title} label="Title" />
               <Input ref={description} label="Description" textarea/>
               <Input type="date" ref={dueDate} label="Due Date" />

            </div>
        </div>
        </>
    )
}