function AI_mig_bestMove(MasterBoardList, last_move_cell, curr_player) {
    // Get possible moves
    let available_cells = AI_getPossibleMoves(MasterBoardList, last_move_cell)
    let rand_cell = AI_sampleRandomFromArray(available_cells)
    return rand_cell
}