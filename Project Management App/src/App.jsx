import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import ProjectsSidebar from "./components/ProjectsSidebar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects:[],
    tasks:[]
  })
console.log(projectState);
  function handleStart(){
    setProjectState((pre)=>{
      return{
        ...pre,
        selectedProjectId:null,
      }
    })
  }

  function handleAddTask(text){
      setProjectState((pre)=>{
        const taskId=Math.random();
        const newTask ={
          text:text,
          projectId:pre.selectedProjectId,
          id:taskId
        }

        
      return{
        ...pre,
        tasks:[...pre.tasks,newTask]
      }
  })}

  function handleDeleteTask(id){
    setProjectState((pre)=>{
      return{
        ...pre,
        tasks: pre.tasks.filter((task)=> task.id !== id)
      }
    })
  }

  function handleCancel(){
    setProjectState((pre)=>{
      return{
        ...pre,
        selectedProjectId:undefined,
      }
    })
  }

  function handleSelectProject(id){
    setProjectState((pre)=>{
      return{
        ...pre,
        selectedProjectId:id,
      }
    })
  }


  function handleAddProject(projectData){
    setProjectState((pre)=>{
      const newProject={
        ...projectData,
        id: Math.random()
      }

      return{
        ...pre,
        selectedProjectId:undefined,
        projects:[...pre.projects, newProject]  
      }
    })
  }

  function handleDelete(){
    setProjectState((pre)=>{
      return{
        ...pre,
        selectedProjectId:undefined,
        projects: pre.projects.filter((project)=> project.id !==projectState.selectedProjectId)
      }
    })
  

  }

  const selectedProject = projectState.projects.find((project)=> project.id === projectState.selectedProjectId)

  let content= <SelectedProject 
  project={selectedProject} 
  onDelete={handleDelete} 
  onAddTask={handleAddTask}
  onDeleteTask={handleDeleteTask}
  tasks={projectState.tasks.filter(
    ({ projectId }) => projectId === projectState.selectedProjectId
  )}
  />;
  if(projectState.selectedProjectId === null){
    content= <NewProject onAdd={handleAddProject} onCancel={handleCancel} />
  }else if(projectState.selectedProjectId === undefined){
    content= <NoProjectSelected initialize={handleStart}/>
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar 
        initialize={handleStart} 
        projects={projectState.projects} 
        onSelect={handleSelectProject} 
        selectedProjectId={projectState.selectedProjectId} />
        {content}
        {/* <NoProjectSelected initialize={handleStart} />
        {projectState.selectedProjectId===null && <NewProject/>} */}
        </main>
    </>
  );
}

export default App;
