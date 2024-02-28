export default function ProjectPage ({infos}){
    return(
        <>
        {infos !=null && infos.map((el,i)=>
        { return <section key={i+"y"} id="pro-page">
        <section id="project-header">
        <button>Delete</button>
            
         <section key={i}> <h1>Project Name: {el[i].title}</h1>
            <p>{el[i].date}</p>
        <p>Project Description: {el[i].description}</p>
        </section>
        
        </section>
        

        <section id="task-add">
            <label>Tasks</label>
            <input type="text" />
            <button>Add Task</button>

        </section>
        <section id="tasks">
            <p>there is no task</p>
        </section>

        </section>})}
        </>
    )
}