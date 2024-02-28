import { useState } from "react"


export default function Player ({name,symbol,isActive,onChangeName}){
const [isEditing, setIsEditing]= useState(false)
const [playerName, setPlayerName]= useState(name)
function handleChange(e){
setPlayerName(e.target.value)

}
let btnName = "Edit"
function handleEditClick(){  
setIsEditing((isEditing)=> !isEditing) 

if(isEditing){
     onChangeName(symbol,playerName)
}
}


    return <li className={isActive ? "active" : undefined}>
        <span className="player">
        {!isEditing ? (<>
        
             <span className="player-name">{playerName}</span>
             </>
        ) : <input type="text" required value={playerName} onChange={handleChange}/>}
   <span className="player-symbol">{symbol}</span>
   </span>
    <button onClick={handleEditClick}>
     {!isEditing ? btnName : btnName="Save"}
    </button>
    

  </li>
}