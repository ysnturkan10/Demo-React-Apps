import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import { useState } from "react"
import Log from "./components/Log"
import { WINNING_COMBINATIONS } from "./WINNING_COMBINATIONS.js"
import GameOver from "./components/GameOver.jsx"

const PLAYERS={
  "X":"Player1",
  "O":"Player2"
}

const initialGameBoard= [
  [null,null,null],
  [null,null,null],
  [null,null,null]

]

function deriveActivePlayer(gameTurns){

  let currPlayer= "X"
  if(gameTurns.length >0 && gameTurns[0].player ==="X"){
    currPlayer="O"
  }
  return currPlayer 
  
}

function deriveWinner (gameBoard,players){
  let winner;
for(const combination of WINNING_COMBINATIONS){
  const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column]
  const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column]
  const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column]

  if(firstSquareSymbol && 
    firstSquareSymbol===secondSquareSymbol && 
    firstSquareSymbol===thirdSquareSymbol){
      winner = players[firstSquareSymbol]

    }

}
return winner

}

function App() {
  const [players,setPlayers] = useState({
    "X":"Player1",
    "O":"Player2"
  })
  const [gameTurns,setGameTurns]= useState([])
const activePlayer = deriveActivePlayer(gameTurns)

//let gameBoard = structuredClone(initialGameBoard) 
let gameBoard = [...initialGameBoard.map(innerArray=> [...innerArray])] 

for(const turn of gameTurns){
    const {square,player}=turn
    const {row,col}=square
    gameBoard[row][col]=player
}

const winner= deriveWinner(gameBoard,players)

const hasDraw = gameTurns.length==9 && !winner

  function handleChangeSquare(rowIndex,colIndex){

     setGameTurns( (prevTurns) => {
      const activePlayer = deriveActivePlayer(prevTurns)
      const updatedTurns = [{square:{ row:rowIndex, col:colIndex },player:activePlayer},...prevTurns]
     
    return updatedTurns
    })
  }


  function handleRestart () {
    setGameTurns([])
  }


  function handlePlayerName(symbol,newName){
setPlayers(prePlayers => {
  return{
    ...prePlayers,
    [symbol]:newName  
  }
})
  }
  

  return (
  <main>
 <div id="game-container">
  <ol id="players" className="highlight-player">
    <Player name={PLAYERS.X} symbol="X" isActive={activePlayer=="X"} onChangeName={handlePlayerName} />
    <Player name={PLAYERS.O} symbol="O" isActive={activePlayer=="O"} onChangeName={handlePlayerName}/>
    

  </ol>
  {(winner || hasDraw) && <GameOver winner={winner} handleRestart={handleRestart}/>}
  <GameBoard onSelectSquare={handleChangeSquare} board={gameBoard} />

 </div>
 <Log turns={gameTurns}/>
 </main>
  )
}

export default App
