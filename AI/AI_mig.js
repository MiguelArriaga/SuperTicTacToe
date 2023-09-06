const branchingBreath = 10;


const winValue = { "X": 999, "O": -999, "Tie": 0 };
const positionScoreMap = ["_", 3, 2, 3, 2, 4, 2, 3, 2, 3];
const closedBoardFactor = 6; // Factor to scale the positional score in closed boards
const closeOpportunityFactor = 4; // Score of one opportunity to close a board
const winOpportunityFactor = 20; // Score of one opportunity to win the game

const opponentFactor = { "X": 1, "O": -1 }

function AI_mig_bestMove(MasterBoardList, last_move_cell, curr_player) {
    // Get possible moves
    let available_cells = AI_getPossibleMoves(MasterBoardList, last_move_cell)
    scores = []
    for (let move of available_cells) {
        let [MasterWinner, next_move, NewMasterBoard] = AI_makeMove(MasterBoardList,move[0],move[1],last_move_cell)
        let newScore = AI_mig_getScore(MasterBoardList, curr_player)
        scores.push(newScore)
    }
    let sortedAvailableCells = AI_sortAbyB(available_cells,scores).slice(0,branchingBreath)
    return sortedAvailableCells[0]
}

function AI_mig_getScore(MasterBoardList, curr_player) {

    let board = (bb) => MasterBoardList[bb - 1]
    let cell = (bb, cc) => board(bb)[cc - 1]

    // If game is over, give the final win/tie/loss score
    let gamewinner = AI_getWinner(MasterBoardList)
    if (gamewinner) { return opponentFactor[curr_player] * winValue[gamewinner] }


    score = 0

    // Add score from simple positions
    for (let b of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        if (board(b) == "X") {
            score += closedBoardFactor * positionScoreMap[b]
        } else if (board(b) == "O") {
            score -= closedBoardFactor * positionScoreMap[b]
        } else {
            for (let c of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
                if (cell(b, c) == "X") {
                    score += positionScoreMap[c]
                } else if (cell(b, c) == "O") {
                    score -= positionScoreMap[c]
                }
            }
        }
    }

    // Get score from closing opportunities
    for (let b of [1, 2, 3, 4, 5, 6, 7, 8, 9]) {
        if (!MASTER_CLOSED_BOARD_OPTIONS.includes(board(b))) {
            // Add X opportunities
            let closingOpportunitiesX = AI_mig_closingOpportunities(board(b), "X");
            score += closeOpportunityFactor * closingOpportunitiesX.length

            // Subtract O opportunities
            let closingOpportunitiesO = AI_mig_closingOpportunities(board(b), "O");
            score += closeOpportunityFactor * closingOpportunitiesO.length
        }
    }

    // Get score from winning opportunities
    // Add X opportunities
    let winningOpportunitiesX = AI_mig_closingOpportunities(MasterBoardList, "X");
    score += winOpportunityFactor * winningOpportunitiesX.length

    // Subtract O opportunities
    let winningOpportunitiesO = AI_mig_closingOpportunities(MasterBoardList, "O");
    score -= winOpportunityFactor * winningOpportunitiesO.length

    return opponentFactor[curr_player] * score

}

function AI_mig_closingOpportunities(genericBoard, tplayer) {

    cell = (cc) => genericBoard[cc - 1]

    let closingOpportunities = {}
    const win_combos = ["123", "456", "789", "147", "258", "369", "159", "357"];

    for (let combo of win_combos) {
        pcounts = { "X": 0, "O": 0, "Tie": 0 }
        let p_empty = -1
        for (let i = 0; i < 3; i++) {
            let val = cell(combo[i])
            pcounts[val] += 1
            if (val == "") {
                p_empty = combo[i]
            }
        }
        if (pcounts[tplayer] == 2 && (pcounts["X"] + pcounts["O"] + pcounts["Tie"]) == 2) {
            closingOpportunities[p_empty] = tplayer
        }
    }

    return Object.keys(closingOpportunities)

}
