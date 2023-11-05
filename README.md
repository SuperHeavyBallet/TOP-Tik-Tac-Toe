# TOP-Tik-Tac-Toe
The Odin Project - Building a Tic Tac Toe game to play in browser.


1 - First, declare a `game` object containing the key:value pairing for:
-- size: an integer
-- board: an empty array
-- turnIndicator: a query selector for the player turn indicator
-- isXPlayerTurn: a boolean to alternate on each turn
-- pieceClicked: an array of bools of the game.size variable, with each bool set to false initially

2 - Second, set the game object's turnIndicator's text content to display `Player X Turn`

3 - Third, a function to create each board piece.
- 1 - Declare a const for each `piece` as a new `div` created in the DOM.
- 2 - Set the attribute of `piece` to `class - 'clicked-piece-x` which applies the correct class selector to that div.
- 3 - Add an `event listener to the piece` which on `click` performs the following functions:
--- 1 - `If` this piece has not previously been clicked, and it has been clicked now, then the bool of `pieceClicked` in the `game object` array of pieces at index `index via input parameter` is set to true.
------- `else` do nothing, this piece has been clicked already.
--- 1 - `If` the game object currently is set to `isXPlayerTurn = true` (Then it is the turn for the X Mark Player) > Then proceed with the logic for X Mark Player having clicked.
------- `else` proceed with the logic for O Mark Player having clicked.
--- 2 - Set the `game object - isXplayerTurn` to the opposite of what it was previously to indicate a change of player turn.
--- 3 - Set the attribute of the clicked piece to `clicked-piece-(x or o)` to indicate specific `mark and colour`;
--- 4 - Set the `game object - turnIndicator`'s text content to display the next player's turn.
--- 5 - Return this piece.

4 - Fourth, a function to create the `Mark` for each player in the piece, using the input parameter defined in the `createPiece` function.
-- 1 - Create a `div` element and assign it to the mark variable.
-- 2 - Set the class attribute of the mark element to `mark`.
-- 2 - Set the text content of mark to what was supplied in the `createPiece` function (`X or O`).
-- 3 - Return the mark

5 - Fifth, a function to initialise the game
-- 1 - Create a vatiable for `gameBoardContainer` which query selects the DOM element with class .gameboard-container.
-- 2 - A for loop, iterating i by +1 until i is greater than the `game object`'s `size` value. (Creating a new board square piece to fill out the board, size would typically be 9 or 3x3).
--- 1 - Create a `newPiece` variable which has the value of function > createPiece with the input parameter of the current `i index` to cross reference it with the `pieceClicked` at the same `index` position.
--- 2 - `push` that newPiece into the `game board array`, using push to add each piece to the end of the elements.
--- 3 - `append` the newPiece as a child of the gameBoardContainer DOM element.

6 - Run the initializeGame function.