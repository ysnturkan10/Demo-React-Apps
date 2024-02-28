import {useRef, useState } from "react"
import {createPortal} from "react-dom"
import Sidebar from "./SideBar"

export default function ProjectForm ({handleShow,getProjectNames,formIsVisible}){

    const [projectInfos, setProjectInfos]=useState([])

    function handleChange(e){
       setProjectInfos((pre)=>{
            return{
            ...pre,
            [e.target.name]:e.target.value
        }

        
      })
    }

    function submit (e){
       e.preventDefault();
    if(projectInfos.title && projectInfos.description && projectInfos.date){ 
      getProjectNames(projectInfos)
      formIsVisible()
    }
      else{
        console.log("Fulfill all inputs");
      }

    




    }

    return(
      <>
        <form id="form" onSubmit={submit} onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault(); }}>
            <div className="btns">
            <button onClick={(e)=> handleShow("cancel",e)}>Cancel</button>
            <button type="submit" >Save</button>
            </div>
            
            <label>Title</label>
            <input className="title" type="text" 
            
            name="title"
              onChange={handleChange}
            />

            <label>Description</label>
            <input className="description" type="text"
             name="description"
             onChange={handleChange}

             />

            <label>Date</label>
            <input className="date" type="date" 
             name="date"
             onChange={handleChange}

             />
            

        </form>

        </>
    )
}

