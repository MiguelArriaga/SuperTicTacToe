const AIs = {
    'human': { 'Name': "Human", "Function": null },
    'random': { 'Name': "Random", "Function": AI_random_bestMove }
}
const default_AI = 'human'


function callAI(start_player) {
    let ai_id = player_AI[start_player];
    let board;
    let cell;
    let boardList = getMasterBoardList();
    if (ai_id != "human") {
        for (let i = 0; i < 50; i++) {
            [board, cell] = AIs[ai_id]["Function"](boardList,last_cell, start_player);
            var succeeded = play(document.getElementById(`board${board}_cell${cell}`), silent = true);
            if (succeeded) {
                console.log(`Player ${start_player} used AI=${ai_id} to play move: board${board}_cell${cell}`);
                return;
            }
        }
        console.log(`AI (${ai_id}) tried to play 50 times and failed! Please play manually or fix AI`);
    }
}

function populateAIs() {
    for (let ptype of ["X", "O"]) {
        let dropdown = document.getElementById(`player${ptype}Dropdown`);
        for (let ai in AIs) {
            dropdown.innerHTML += `<option id="${ptype}_${ai}" value="${ai}">${AIs[ai]["Name"]}</option>\n`;
        }
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
