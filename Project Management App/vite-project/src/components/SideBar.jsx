import { useRef, useState } from "react"
import ProjectForm from "./ProjectForm"
import ProjectPage from "./ProjectPage"
import ProjectButton from "./ProjectButton"

export default function Sidebar ({handleShow,isVisible,formIsVisible,isMainVisible,isPageVisible}){
    const infoArray = useRef([])
    const titleArray = useRef([])

 const [infos,setInfos]=useState([])
 const [titles,setTitles]=useState([])

    function getProjectNames(info){
        const doesInclude = titleArray.current != null && titleArray.current.includes(info.title)
        if(titles!=null && !doesInclude)
           { titleArray.current.push(info.title)
            infoArray.current.push(info)
            let newInfos = structuredClone(infos)
            let newTitles = structuredClone(titles)
            newInfos = [...newInfos,infoArray.current]
            newTitles=[...newTitles,titleArray.current]
            setInfos(newInfos) 
            setTitles(newTitles)


        }else
               { alert("This project has already been added")}
           
    }



    return (
        <>
        <div id="sidebar">
            <h2>Your Projects</h2>
            <button onClick={(e)=> handleShow("add",e)}>+Add Project</button>
         {   infos.map((el,i)=>{
            <ProjectButton key={i+"y"} infos={infos} />
    
})}

           
        </div>
    {isVisible && <ProjectForm handleShow={handleShow} formIsVisible={formIsVisible} getProjectNames={getProjectNames} />}

    {   infos.map((el,i)=>{
{isPageVisible && <ProjectPage key={i+"y"} infos={infos} />}
    
})}

      

        </>
    )
}