import './App.css';
import { useState } from 'react';



export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    function onHandleClick(i){
        const nextSquares = squares.slice();
        if (nextSquares[i] ==null){
            nextSquares[i] = "X";
            if (xIsNext) {
                nextSquares[i] = "X";
            } else {
                nextSquares[i] = "O";
            }
            setXIsNext(!xIsNext);
        }
        setSquares(nextSquares);
    };
    return (
        <>

            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => onHandleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => onHandleClick(1)}/>
                <Square value={squares[2]} onSquareClick={ () => onHandleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={squares[3]} onSquareClick={() => onHandleClick(3)}/>
                <Square value={squares[4]} onSquareClick={() => onHandleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => onHandleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => onHandleClick(6)}/>
                <Square value={squares[7]} onSquareClick={() => onHandleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => onHandleClick(8)}/>
            </div>
        </>
    );
}
function Square({value, onSquareClick}){

        return <button className="square" onClick={onSquareClick}>{value}</button>
}
/*function PlayerTurn(nextPlayer) {
    return <label> Next player: {nextPlayer} </label>;
}*/
