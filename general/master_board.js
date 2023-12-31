

function createMasterBoard() {
    let board = document.getElementById(`masterboard`)
    board.innerHTML = `
    <tr>
        <td id="masterboard_cell1"><table id="board1" class="board"></table></td>
        <td id="masterboard_cell2"><table id="board2" class="board"></table></td>
        <td id="masterboard_cell3"><table id="board3" class="board"></table></td>
    </tr>
    <tr>
        <td id="masterboard_cell4"><table id="board4" class="board"></table></td>
        <td id="masterboard_cell5"><table id="board5" class="board"></table></td>
        <td id="masterboard_cell6"><table id="board6" class="board"></table></td>
    </tr>
    <tr>
        <td id="masterboard_cell7"><table id="board7" class="board"></table></td>
        <td id="masterboard_cell8"><table id="board8" class="board"></table></td>
        <td id="masterboard_cell9"><table id="board9" class="board"></table></td>
    </tr>
    `

    for (let board_id of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        createBoard(board_id)
    }

}


function createBoard(board_id) {
    let board = document.getElementById(`board${board_id}`)
    board.innerHTML = `
    <tr>
        <td id="board${board_id}_cell1" onclick="play(this)"></td>
        <td id="board${board_id}_cell2" onclick="play(this)"></td>
        <td id="board${board_id}_cell3" onclick="play(this)"></td>
    </tr>
    <tr>
        <td id="board${board_id}_cell4" onclick="play(this)"></td>
        <td id="board${board_id}_cell5" onclick="play(this)"></td>
        <td id="board${board_id}_cell6" onclick="play(this)"></td>
    </tr>
    <tr>
        <td id="board${board_id}_cell7" onclick="play(this)"></td>
        <td id="board${board_id}_cell8" onclick="play(this)"></td>
        <td id="board${board_id}_cell9" onclick="play(this)"></td>
    </tr>
    `
}

function getMasterBoardList() {
    var masterBoardList = []

    for (let cid of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        let mb_cell = document.getElementById(`masterboard_cell${cid}`)
        let cell_val = mb_cell.innerHTML
        if (MASTER_CLOSED_BOARD_OPTIONS.includes(cell_val)) {
            masterBoardList.push(cell_val)
        } else {
            let boardList = getBoardList(cid)
            masterBoardList.push(boardList)

        }

    }
    return masterBoardList

}



function updateMasterBoardWinner(board, winner) {
    let master_cell = document.getElementById(`masterboard_cell${board}`)
    master_cell.innerHTML = winner;
    updateLastCell(last_cell)
}

function checkMasterWinner() {
    let master_cells = getCellsOfMasterBoard()
    let master_winner = checkWinner(master_cells);
    if (master_winner) {
        set_game_over(master_winner)
    }
}
function getCellsOfMasterBoard() {
    var cells = [];

    for (let cid of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        let cell_id = `masterboard_cell${cid}`;
        cells.push(document.getElementById(cell_id));
    }
    return cells
}

function updateLastCell(last_played_cell) {
    // console.log(last_played_cell)
    let master_cell = document.getElementById(`masterboard_cell${last_played_cell}`)
    reset_playable()
    if (last_played_cell == 0 || MASTER_CLOSED_BOARD_OPTIONS.includes(master_cell.innerHTML)) {
        last_cell = 0
    } else {
        last_cell = last_played_cell
        let cell = document.getElementById(`masterboard_cell${last_cell}`)
        cell.classList.add('playable');
    };
}


function reset_playable() {
    for (let cid of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        let cell_id = `masterboard_cell${cid}`;
        let cell = document.getElementById(cell_id);
        cell.classList.remove('playable');
    }
}

