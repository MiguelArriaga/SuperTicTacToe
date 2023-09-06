function AI_getPossibleMoves(MasterBoardList, last_move_cell) {
    let possible_moves = []

    // Check each small board
    for (let board of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        // If board is compatible with last_move
        if (board == last_move_cell || last_move_cell == 0) {
            // Get empty cells of that board and add them to the list of possible moves
            let empty_cells = AI_getEmptyCells(MasterBoardList[board - 1])
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

function AI_makeMove(MasterBoard, move_board, move_cell, move_player) {
    let next_move = move_cell
    MasterBoard[move_board - 1][move_cell - 1] = move_player


    for (let board of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        winner = AI_getWinner(MasterBoard[board - 1])
        if (winner) {
            MasterBoard[board - 1] = winner
            if (move_cell == board) {
                next_move = 0
            }
        }
    }
    MasterWinner = AI_getWinner(MasterBoard)
    return MasterWinner, next_move, MasterBoard

}

function AI_sampleRandomFromArray(myArray, n_samples = 1) {
    if (n_samples > myArray.length) { n_samples = myArray.length }
    let available_positions = getRange(myArray.length)

    sampled_items = []
    for (let s = 0; s < n_samples; s++) {
        let rand_elem = Math.floor(Math.random() * available_positions.length);
        sampled_items.push(myArray[available_positions[rand_elem]])
        available_positions.splice(rand_elem, 1);
    }

    if (n_samples == 1) {
        sampled_items = sampled_items[0]
    }

    return sampled_items
}

