export default function MainScreen({handleShow}){
    return (
        <section className="main-menu">
        <h1>Select a project</h1>
        <button onClick={(e)=> handleShow("add",e)}>Create a project</button>

    </section>
    )
}