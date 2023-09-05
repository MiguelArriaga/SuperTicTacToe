
/**
 * 
 * @param {Array[Array[String]]} boardList Is an Array[9], where each element correspons to a board, and can be:
 *                                         (1) "X","O","Tie" - if that board already is closed
 *                                         (2) Array[9] with the moves already played in that board ("X", "O", "")  
 * @param {Integer} last_move_cell The cell that the previous player played. The `curr_player` needs to play
 *                                 in the board with this number unless `last_move_cell==0` which means that
 *                                 `curr_player` can play on any empty cell of the board. 
 * @param {String} curr_player Can be "X" or "O" and indicates which player is making a move
 * @returns [board,cell] represents the next move, where `board` is an integer 1-9 corresponding to the
 *                       position in the master_board (i.e. which small board in the large grid) and `cell`
 *                       is an integer 1-9 corresponding to the position on the selected `board` 
 */
function AI_random_bestMove(boardList, last_move_cell, curr_player) {
    // Get possible moves
    let available_cells = AI_random_getPossibleMoves(boardList, last_move_cell)
    let rand_elem = Math.floor(Math.random() * available_cells.length);
    return available_cells[rand_elem]

}

function AI_random_getPossibleMoves(boardList, last_move_cell) {
    let possible_moves = []
    
    // Check each small board
    for (let board of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        // If board is compatible with last_move
        if (board == last_move_cell || last_move_cell == 0) {
            // Get empty cells of that board and add them to the list of possible moves
            let empty_cells = AI_random_getEmptyCells(boardList[board - 1])
            for (let empty_cell of empty_cells) {
                possible_moves.push([board, empty_cell])
            }
        }
    }
    return possible_moves
}



function AI_random_getEmptyCells(smallBoard) {
    let empty_cells = []

    // Check if board is already closed, i.e. there are no empty cells
    if (MASTER_CLOSED_BOARD_OPTIONS.includes(smallBoard)) {
        return empty_cells
    }

    // For each cell, check if it empty and add to list of empty cells
    for (let cell of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        if (smallBoard[cell - 1] == "") {
            empty_cells.push(cell)
        }
    }

    return empty_cells
}