const game = {
    size: 9,
    board: [],
    turnIndicator: document.querySelector('.player-turn-indicator'),
    turns: 9,
    turnCounter: document.querySelector('.player-turns-left'),
    isXPlayerTurn: true,
    pieceClicked: Array(9).fill(''),
    winner: '',
    gameOver: false,

    
};

const gameBoardContainer = document.querySelector('.gameboard-container');
const resultCardContainer = document.querySelector(".result-card-container");
const resultCard = document.createElement('div');
const restartGame = document.createElement('div');

let gameBoardRoughArray = [[],[],[]];
let gameBoard = [[],[],[]];



function Player(name, mark, turn){
    this.name = name;
    this.mark = mark;
    this.turn = turn;

    const gamePlayerContainer = document.querySelector('.player-card-container');
    const playerName = document.createElement('div');
    const playerMark = document.createElement('div');
    const playerTurn = document.createElement('div');
    
    

    playerName.textContent = name;
    playerMark.textContent = 'Player Mark: ' + mark;

    this.updateTurnText = function(){
        if (this.turn)
        {
            playerTurn.textContent = 'Your Turn Now!';
        }else{
            playerTurn.textContent = 'Not Your Turn.';
        }
    }

    this.updateTurnText();

    gamePlayerContainer.appendChild(playerName);
    playerName.appendChild(playerMark);
    playerName.appendChild(playerTurn);

    this.setTurn = function(value){
        this.turn = value;
        this.updateTurnText();
    }
}

let player1X = new Player('Player 1', 'X', true);
let player2O = new Player('Player 2', 'O', false);

game.turnIndicator.textContent = 'Player X Turn';

function createPiece(index){
    const piece = document.createElement('div');
    piece.setAttribute('class', 'gameboard-piece');


    
    

        


    piece.addEventListener('click', () => {

        if (game.gameOver == false)
        {
                if (!game.pieceClicked[index]) {

                    game.turns --;
                    console.log(game.turns);


                    if (game.isXPlayerTurn){
                        game.isXPlayerTurn = false;
                        piece.setAttribute('class', 'clicked-piece-x');
                        game.turnIndicator.textContent = 'Player O Turn';
                        game.pieceClicked[index] = 'X';
                        
                        player1X.setTurn(false);
                        player2O.setTurn(true);

                        const mark = createMark('X');
                        piece.appendChild(mark);


                    } else {
                        game.isXPlayerTurn = true;
                        piece.setAttribute('class', 'clicked-piece-o');
                        game.turnIndicator.textContent = 'Player X Turn';
                        player1X.setTurn(true);
                        player2O.setTurn(false);
                        game.pieceClicked[index] = 'O';
                        

                        const mark = createMark('O');
                        piece.appendChild(mark);

                        

        
                    }

                    game.turnCounter.textContent = ('Turns Left: ' + game.turns);

                    checkRow();
                    checkColumn();
                    checkDiagonalRight();
                    checkDiagonalLeft();

                    if (game.turns == 0)
                    {   
            
                        winnerAnnounce();
                        
                    }
                

                }
        }

       
    

    });

    

    return piece;
}

function winnerAnnounce()
{
        resultCardContainer.appendChild(resultCard);
        resultCard.setAttribute('class', 'result-card');

        if (game.winner != ''){
        resultCard.textContent = 'Game Over! \n Player ' + game.winner + ' Wins!';
        game.gameOver = true;
    }
    else{
        resultCard.textContent = 'Game Over! It\'s a draw!';
        game.gameOver = true;
    }

        resultCardContainer.appendChild(restartGame);
        restartGame.setAttribute('class', 'result-card');
        restartGame.textContent = 'Play Again?';

        restartGame.addEventListener('click', () => {


            location.reload();
        })
}


function createMark(text){
    const mark = document.createElement('div');
    mark.setAttribute('class', 'mark');
    mark.textContent = text;
    return mark;
}

function checkRow(){

   for (let i = 0; i < 9; i+=3)
   {
        if (game.pieceClicked[i] === 'X' && game.pieceClicked[i+1] === 'X' && game.pieceClicked[i+2] === 'X'){
            game.turns = 0;
            game.winner = 'X'
        }
        else if (game.pieceClicked[i] === 'O' && game.pieceClicked[i+1] === 'O' && game.pieceClicked[i+2] === 'O'){
            game.turns = 0;
            game.winner = 'O'
        }
   }
}

function checkColumn(){

    for (let i = 0; i < 3; i++) {
        if (game.pieceClicked[i] === 'X' && game.pieceClicked[i + 3] === 'X' && game.pieceClicked[i + 6] === 'X') {
            game.turns = 0;
            game.winner = 'X'
        } else if (game.pieceClicked[i] === 'O' && game.pieceClicked[i + 3] === 'O' && game.pieceClicked[i + 6] === 'O') {
            game.turns = 0;
            game.winner = 'O'
        }
    }
 }

 function checkDiagonalRight(){
    if (game.pieceClicked[0] === 'X' && game.pieceClicked[4] === 'X' && game.pieceClicked[8] === 'X') {
        game.turns = 0;
        game.winner = 'X'
    } else if (game.pieceClicked[0] === 'O' && game.pieceClicked[4] === 'O' && game.pieceClicked[8] === 'O') {
        game.turns = 0;
        game.winner = 'O'
    }

 }

 function checkDiagonalLeft(){
    if (game.pieceClicked[2] === 'X' && game.pieceClicked[4] === 'X' && game.pieceClicked[6] === 'X') {
        game.turns = 0;
        game.winner = 'X'
    } else if (game.pieceClicked[2] === 'O' && game.pieceClicked[4] === 'O' && game.pieceClicked[6] === 'O') {
        game.turns = 0;
        game.winner = 'O'
    }

 }

function initializeGame() {
    
    for (let i = 0; i < game.size; i++)
    {
        const newPiece = createPiece(i);
        game.board.push(newPiece);
        gameBoardContainer.appendChild(newPiece);
    }

   
}

initializeGame();

