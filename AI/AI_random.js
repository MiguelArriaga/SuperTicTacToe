
/**
 * 
 * @param {Array[Array[String]]} MasterBoardList Is an Array[9], where each element correspons to a board, and can be:
 *                                               (1) "X","O","Tie" - if that board already is closed
 *                                               (2) Array[9] with the moves already played in that board ("X", "O", "")  
 * @param {Integer} last_move_cell The cell that the previous player played. The `curr_player` needs to play
 *                                 in the board with this number unless `last_move_cell==0` which means that
 *                                 `curr_player` can play on any empty cell of the board. 
 * @param {String} curr_player Can be "X" or "O" and indicates which player is making a move
 * @returns [board,cell] represents the next move, where `board` is an integer 1-9 corresponding to the
 *                       position in the master_board (i.e. which small board in the large grid) and `cell`
 *                       is an integer 1-9 corresponding to the position on the selected `board` 
 */
function AI_random_bestMove(MasterBoardList, last_move_cell, curr_player) {
    // Get possible moves
    let available_cells = AI_getPossibleMoves(MasterBoardList, last_move_cell)
    let rand_cell = AI_sampleRandomFromArray(available_cells)
    return rand_cell
}
