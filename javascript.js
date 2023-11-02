console.log("Hello world.");

const GameBoard = [];
const gameBoardSize = 9;

const gameBoardContainer = document.querySelector('.gameboard-container');

const playerTurnIndicator = document.querySelector('.player-turn-indicator');

let isXPlayerTurn = true;
playerTurnIndicator.textContent = ('Player X Turn');

for (let i = 0; i < gameBoardSize; i++)
{
    const newPiece = document.createElement("div");
    newPiece.setAttribute('class', 'gameboard-piece');
    gameBoardContainer.appendChild(newPiece);


    

    GameBoard.push(newPiece);
    console.log(GameBoard);

    
}

for (let i = 0; i < GameBoard.length; i++)
{
    GameBoard[i].addEventListener('click', () => {
        
        

        if (isXPlayerTurn)
        {
            isXPlayerTurn = false;
            GameBoard[i].setAttribute('class', 'clicked-piece-x');
            playerTurnIndicator.textContent = ('Player O Turn');

            const NewPieceMarkX = document.createElement("div");
            NewPieceMarkX.setAttribute('class', 'mark');
            NewPieceMarkX.textContent = ("X");
            GameBoard[i].appendChild(NewPieceMarkX);
            
        }
        else if (!isXPlayerTurn)
        {
            isXPlayerTurn = true;
            GameBoard[i].setAttribute('class', 'clicked-piece-o');
            playerTurnIndicator.textContent = ('Player X Turn');

            const NewPieceMark0 = document.createElement("div");
            NewPieceMark0.setAttribute('class', 'mark');
            NewPieceMark0.textContent = ("O");
            GameBoard[i].appendChild(NewPieceMark0);
        }

    })
}

function Player(name, mark, score){

    this.name = name;
    this.mark = mark;
    this.score = score;

}
