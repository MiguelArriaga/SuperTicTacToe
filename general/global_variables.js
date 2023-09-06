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

function serializeArray(arr) {
    let curr_text = "";
    if ( typeof(arr) != "string") {
        curr_text += "[";
        for (var i = 0; i < arr.length; i++) {
            curr_text += serializeArray(arr[i]) 
            if (i < arr.length -1) {
                curr_text += ", ";
            }
        }
        curr_text += "]";
        return curr_text
    }
    else  {
        return `"` + arr + `"`;
    }

}

function getRange(L){
    return Array.from({length: L}, (value, index) => index )
}