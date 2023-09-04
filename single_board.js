function getCellsOfBoard(board) {
    var cells = []

    for (let cid of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        let cell_id = `board${board}_cell${cid}`
        cells.push(document.getElementById(cell_id))
    }
    return cells
}

function play(html_cell) {
    // debugger;
    console.log(html_cell);
    if (game_over) {
        return
    };

    let idstr = html_cell.id.split("_");
    let board = parseInt(idstr[0].replace("board", ""));
    let cell = parseInt(idstr[1].replace("cell", ""));
    var cells = getCellsOfBoard(board)

    if (!cells[cell - 1].innerHTML && (board == last_cell || last_cell == 0)) {
        cells[cell - 1].innerHTML = player;
        player = (player == "X") ? "O" : "X";
        updateLastCell(cell)
    }

    let winner = checkWinner(cells);
    if (winner) {
        updateMasterBoardWinner(board, winner)
    }

    // Update the "Next Player" text
    document.getElementById("next_player").innerHTML = player;

}

function checkWinner(cells) {
    var combos = ["123", "456", "789", "147", "258", "369", "159", "357"];
    for (let tplayer of ["X", "O"]) {
        for (var i = 0; i < combos.length; i++) {
            if (cells[combos[i][0] - 1].innerHTML == tplayer &&
                cells[combos[i][1] - 1].innerHTML == tplayer &&
                cells[combos[i][2] - 1].innerHTML == tplayer) {
                return tplayer;
            }
        }
    }
    return null
}

