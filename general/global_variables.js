var player = "X";
var last_cell = 0;
var game_over = false;
var player_AI = {"X":null, "O":null}

const MASTER_CLOSED_BOARD_OPTIONS = ['X', 'O', 'Tie']

function reset_globals() {
    player = "X";
    last_cell = 0;
    game_over = false;
}