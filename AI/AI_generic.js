function AI_getPossibleMoves(boardList, last_move_cell) {
    let possible_moves = []

    // Check each small board
    for (let board of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        // If board is compatible with last_move
        if (board == last_move_cell || last_move_cell == 0) {
            // Get empty cells of that board and add them to the list of possible moves
            let empty_cells = AI_getEmptyCells(boardList[board - 1])
            for (let empty_cell of empty_cells) {
                possible_moves.push([board, empty_cell])
            }
        }
    }
    return possible_moves
}


function AI_getEmptyCells(smallBoard) {
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


function AI_getWinner(genericBoard) {
    // Check if board is already closed, i.e. winner is already known
    if (MASTER_CLOSED_BOARD_OPTIONS.includes(genericBoard)) {
        return genericBoard
    }

    // Check if there is any player with 3-in-line on the board
    var combos = ["123", "456", "789", "147", "258", "369", "159", "357"];
    for (let tplayer of ["X", "O"]) {
        for (var i = 0; i < combos.length; i++) {
            if (genericBoard[combos[i][0] - 1] == tplayer &&
                genericBoard[combos[i][1] - 1] == tplayer &&
                genericBoard[combos[i][2] - 1] == tplayer) {
                return tplayer;
            }
        }
    }

    // When there is no winner, check if it is still playable by finding a cell that is not "X"/"O"/"Tie" (i.e. either empty or with an array)
    for (cell of genericBoard) {
        if (!MASTER_CLOSED_BOARD_OPTIONS.includes(cell)) {
            return null
        }
    }

    // If there is no winner and there are no more playable moves inside, then the board is a tie
    return "Tie"
}