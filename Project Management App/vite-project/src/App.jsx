import SideBar from "./components/SideBar"
import MainScreen from "./components/MainScreen"
import ProjectForm from "./components/ProjectForm"
import {useState} from "react"
import ProjectPage from "./components/ProjectPage"

function App() {
  const[isVisible,setIsVisible]=useState(false)
 const [isPageVisible, setIsPageVisible] = useState(false)

  function handleShow(id,e){
      setIsVisible(id=="add" ? true : false)
          id=="cancel" && e.preventDefault()
          setIsPageVisible(false)
  }


    function formIsVisible (){
      setIsVisible(false)
    }

    function isMainVisible(id,e){
      setIsPageVisible(id=="tr" ? true : false)
      setIsVisible(id=="tr" ? false : true)
    }
  return (
    <>

<SideBar handleShow={handleShow} isVisible={isVisible} formIsVisible={formIsVisible} isMainVisible={isMainVisible} isPageVisible={isPageVisible}  /> 
    {(!isVisible && !isPageVisible) && <MainScreen handleShow={handleShow}/>}
     
    </>
  )
}

export default App
