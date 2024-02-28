import Button from "./Button"

export default function ProjectsSidebar({initialize,projects,onSelect,selectedProjectId}){
    return(
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
        <div>
        <Button onClick={() => initialize()}>+ Add a Project</Button>
        </div>
        <ul className="mt-8">
            {projects.map((project,i)=>{
                let cssClasses=" w-full text-left px-2 py-1 rounded-sm my-1 text-stone-400 hover:text-stone-200 hover:bg-stone-800 "
                if(project.id === selectedProjectId){
                    cssClasses+=" bg-stone-800 text-stone-200 "
                }else{
                    cssClasses+=" text-stone-400 "
                }
            
            return (<li key={project.id}>
                <button onClick={(e)=>onSelect(project.id,e)} 
                className={cssClasses} >
                {project.title}</button>
            </li>)
        })}
        </ul>
        </aside>
    )
}