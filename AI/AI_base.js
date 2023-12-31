const AIs = {
    'human': { 'Name': "Human", "Function": null },
    'random': { 'Name': "Random", "Function": AI_random_bestMove },
    'francisquinho': { 'Name': "Francisquinho", "Function": AI_francisquinho_bestMove },
    'mig': { 'Name': "Miguel", "Function": AI_mig_bestMove },
};
const default_AI = 'human';

var battle_iteration = 0;
const battle_games = 100;
var battle_results = [];

function callAI(start_player) {
    let ai_id = player_AI[start_player];
    let board;
    let cell;
    let boardList = getMasterBoardList();
    if (ai_id != "human") {
        for (let i = 0; i < 5; i++) {
            [board, cell] = AIs[ai_id]["Function"](boardList, last_cell, start_player);
            var succeeded = play(document.getElementById(`board${board}_cell${cell}`), silent = true);
            if (succeeded) {
                // console.log(`Player ${start_player} used AI=${ai_id} to play move: board${board}_cell${cell}`);
                return;
            } else {
                console.log(`Player ${start_player} tired to use AI=${ai_id} to play move: board${board}_cell${cell} and failed!`);
            }
        }
        console.log(`AI (${ai_id}) tried to play 5 times and failed! Please play manually or fix AI`);
    }
}

function run_recusrsive_battle() {
    if (battle_iteration < battle_games) {
        reset_globals()
        startUp(popAI = false)

        let board;
        let cell;
        let boardList = getMasterBoardList();
        let start_player = "X"
        let ai_id = player_AI[start_player];
        [board, cell] = AIs[ai_id]["Function"](boardList, last_cell, start_player);
        var succeeded = play(document.getElementById(`board${board}_cell${cell}`), silent = true);
        if (succeeded) {
            let master_cells = getCellsOfMasterBoard();
            let master_winner = checkWinner(master_cells);
            battle_results.push(master_winner);
        } else {
            console.log("Illegal move");
        }

        battle_iteration = battle_iteration + 1;
        document.getElementById("myBar").style.width = (100 * battle_iteration / battle_games) + "%";
        setTimeout("run_recusrsive_battle()")
    } else {
        console.log(battle_results)
        let winner_counts = {};
    
        for (let winr of battle_results) {
            winner_counts[winr] = winner_counts[winr] ? winner_counts[winr] + 1 : 1;
        }
        for (let winr in winner_counts) {
            winner_counts[winr] = 100 * winner_counts[winr] / battle_games;
        }
        
        let battle_message = `In ${battle_games} games between AIs\n    X: ${winner_counts["X"]}% (${AIs[player_AI["X"]]["Name"]})\n    O: ${winner_counts["O"]}% (${AIs[player_AI["O"]]["Name"]})\n    Tie: ${winner_counts["Tie"]}%`
        console.log(battle_message)
        alert(battle_message)
    }

}

function BattleAIs() {
    if (player_AI["X"] == "human" || player_AI["O"] == "human") {
        alert("For AI battle, both players must be AI")
        return
    }

    if (battle_iteration == battle_games) {
        battle_iteration = 0;
        battle_results = [];
    }

    run_recusrsive_battle();

}

function populateAIs() {
    for (let ptype of ["X", "O"]) {
        let dropdown = document.getElementById(`player${ptype}Dropdown`);
        let new_innerHTML = ""
        for (let ai in AIs) {
            new_innerHTML += `<option id="${ptype}_${ai}" value="${ai}">${AIs[ai]["Name"]}</option>\n`;
        }
        dropdown.innerHTML = new_innerHTML
        document.getElementById(`${ptype}_${default_AI}`).selected = true;
        player_AI[ptype] = default_AI;
    }

}

function changeAI(dropdown) {
    let ptype = dropdown.getAttribute("data-ptype");
    player_AI[ptype] = dropdown.value;
    console.log(`change AI of ${ptype} to ${dropdown.value}`);
    console.log(player_AI);
}
