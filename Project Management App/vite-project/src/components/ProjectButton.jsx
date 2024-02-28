export default function ProjectButton ({infos}){
    return(
        <section>
        {infos!=null && infos.map((el,i)=><p key={i+"y"} ><button onClick={(e)=> isMainVisible("tr",e)} >{el[i].title} </button></p> )}
        </section> 
    )
    
}