function AI_francisquinho_bestMove(boardList, last_move_cell, curr_player) {
    // Get possible moves
    let available_cells = AI_getPossibleMoves(boardList, last_move_cell)
    let rand_elem = Math.floor(Math.random() * available_cells.length);
    return available_cells[rand_elem]

}