

function startUp() {
    createMasterBoard();
    populateAIs();
    // play(document.getElementById(`board1_cell1`))
}

function set_game_over(master_winner) {
    // alert(master_winner + " wins!");
    let winner_msg_p = document.getElementById("winner_message")
    if (master_winner == "Tie") {
        winner_msg_p.innerHTML = `The game is a Tie !`
    } else {
        winner_msg_p.innerHTML = `Player ${master_winner} is the winner !`
    }

    game_over = true;
    document.getElementById(`masterboard`).classList.add('game_over')
}


function swapPlayer() {
    player = (player == "X") ? "O" : "X";
    document.getElementById("next_player").innerHTML = player;
}


function FillTest() {
    // X Wins
    // play(document.getElementById(`board1_cell1`))
    // play(document.getElementById(`board1_cell2`))
    // play(document.getElementById(`board2_cell6`))
    // play(document.getElementById(`board6_cell9`))
    // play(document.getElementById(`board9_cell9`))
    // play(document.getElementById(`board9_cell7`))
    // play(document.getElementById(`board7_cell8`))
    // play(document.getElementById(`board8_cell9`))
    // play(document.getElementById(`board9_cell5`))
    // play(document.getElementById(`board5_cell7`))
    // play(document.getElementById(`board7_cell4`))
    // play(document.getElementById(`board4_cell5`))
    // play(document.getElementById(`board5_cell1`))
    // play(document.getElementById(`board1_cell3`))
    // play(document.getElementById(`board3_cell2`))
    // play(document.getElementById(`board2_cell1`))
    // play(document.getElementById(`board1_cell5`))
    // play(document.getElementById(`board5_cell6`))
    // play(document.getElementById(`board6_cell2`))
    // play(document.getElementById(`board2_cell5`))
    // play(document.getElementById(`board5_cell5`))
    // play(document.getElementById(`board5_cell3`))
    // play(document.getElementById(`board3_cell7`))
    // play(document.getElementById(`board7_cell1`))
    // play(document.getElementById(`board1_cell9`))
    // play(document.getElementById(`board9_cell2`))
    // play(document.getElementById(`board2_cell3`))
    // play(document.getElementById(`board3_cell9`))

    // Tie wins ?
    play(document.getElementById(`board1_cell1`))
    play(document.getElementById(`board1_cell2`))
    play(document.getElementById(`board2_cell1`))
    play(document.getElementById(`board1_cell7`))
    play(document.getElementById(`board7_cell3`))
    play(document.getElementById(`board3_cell7`))
    play(document.getElementById(`board7_cell8`))
    play(document.getElementById(`board8_cell3`))
    play(document.getElementById(`board3_cell8`))
    play(document.getElementById(`board8_cell9`))
    play(document.getElementById(`board9_cell6`))
    play(document.getElementById(`board6_cell8`))
    play(document.getElementById(`board8_cell1`))
    play(document.getElementById(`board1_cell9`))
    play(document.getElementById(`board9_cell8`))
    play(document.getElementById(`board8_cell4`))
    play(document.getElementById(`board4_cell6`))
    play(document.getElementById(`board6_cell1`))
    play(document.getElementById(`board1_cell3`))
    play(document.getElementById(`board3_cell4`))
    play(document.getElementById(`board4_cell2`))
    play(document.getElementById(`board2_cell4`))
    play(document.getElementById(`board4_cell4`))
    play(document.getElementById(`board4_cell9`))
    play(document.getElementById(`board9_cell5`))
    play(document.getElementById(`board5_cell3`))
    play(document.getElementById(`board3_cell2`))
    play(document.getElementById(`board2_cell8`))
    play(document.getElementById(`board8_cell8`))
    play(document.getElementById(`board8_cell7`))
    play(document.getElementById(`board7_cell2`))
    play(document.getElementById(`board2_cell2`))
    play(document.getElementById(`board2_cell3`))
    play(document.getElementById(`board3_cell3`))
    play(document.getElementById(`board3_cell9`))
    play(document.getElementById(`board9_cell9`))
    play(document.getElementById(`board9_cell3`))
    play(document.getElementById(`board3_cell6`))
    play(document.getElementById(`board6_cell9`))
    play(document.getElementById(`board9_cell2`))
    play(document.getElementById(`board2_cell9`))
    play(document.getElementById(`board9_cell4`))
    play(document.getElementById(`board4_cell7`))
    play(document.getElementById(`board7_cell7`))
    play(document.getElementById(`board7_cell1`))
    play(document.getElementById(`board1_cell8`))
    play(document.getElementById(`board8_cell5`))
    play(document.getElementById(`board5_cell7`))
    play(document.getElementById(`board8_cell6`))
    play(document.getElementById(`board6_cell5`))
    play(document.getElementById(`board5_cell6`))
    play(document.getElementById(`board6_cell3`))
    play(document.getElementById(`board3_cell1`))
    play(document.getElementById(`board5_cell2`))
    play(document.getElementById(`board2_cell6`))
    play(document.getElementById(`board6_cell7`))
    play(document.getElementById(`board5_cell9`))
    play(document.getElementById(`board9_cell7`))
    play(document.getElementById(`board4_cell3`))
    play(document.getElementById(`board3_cell5`))
    play(document.getElementById(`board5_cell8`))
    play(document.getElementById(`board8_cell2`))
    play(document.getElementById(`board4_cell5`))
    play(document.getElementById(`board5_cell4`))
    play(document.getElementById(`board5_cell1`))
    play(document.getElementById(`board5_cell5`))
    // play(document.getElementById(`board9_cell1`))

}

