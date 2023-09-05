
function AI_random_bestMove(boardList, last_move_cell, curr_player) {
    let available_cells = []
    // console.log(last_move_cell)
    // debugger;
    for (let board of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        if (!MASTER_CLOSED_BOARD_OPTIONS.includes(boardList[board-1]) && (board == last_move_cell || last_move_cell == 0)) {
        // if (!MASTER_CLOSED_BOARD_OPTIONS.includes(boardList[board - 1])) {
            for (let cell of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
                if (!["X", "O"].includes(boardList[board - 1][cell - 1])) {
                    available_cells.push([board, cell])
                }
            }
        }
    }

    let rand_elem = Math.floor(Math.random() * available_cells.length);
    return available_cells[rand_elem]

}