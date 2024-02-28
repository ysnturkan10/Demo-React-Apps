
export default function GameOver ({winner,handleRestart}){
    return(
        <div id="game-over">
            <h2>Game Over!!</h2>
            { winner && <p>{winner} won</p>}
            {!winner && <p>It's draw</p> }
            <p>
                <button onClick={handleRestart} >Rematch!</button>
            </p>

        </div>
    )
}