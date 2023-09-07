

function serializeArray(arr) {
    let curr_text = "";
    if (typeof (arr) != "string") {
        curr_text += "[";
        for (var i = 0; i < arr.length; i++) {
            curr_text += serializeArray(arr[i])
            if (i < arr.length - 1) {
                curr_text += ", ";
            }
        }
        curr_text += "]";
        return curr_text
    }
    else {
        return `"` + arr + `"`;
    };

};

function showBoard(MasterBoardList) {
    let board = (bb) => MasterBoardList[bb - 1]
    let cell = (bb, cc) => board(bb)[cc - 1]
    let ROWS = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

    board_text = " \n"
    for (let Mrow = 0; Mrow < 3; Mrow++) {
        boards = ROWS[Mrow]
        for (let srow = 0; srow < 3; srow++) {
            cells = ROWS[srow]
            for (let b of boards) {

                if (b % 3 == 1) {
                    board_text += `&nbsp;&nbsp;`
                }

                if (MASTER_CLOSED_BOARD_OPTIONS.includes(board(b))) {

                    if (srow == 1) {
                        let center_text = board(b)
                        if (center_text != "Tie") {
                            center_text = `&nbsp;${center_text}&nbsp;`
                        }
                        board_text += `&nbsp;&nbsp;&nbsp;${center_text}&nbsp;&nbsp;&nbsp;`
                    } else {
                        board_text += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    }
                } else {

                    for (let c of cells) {

                        board_text += cell(b, c)
                        if (cell(b, c) == "") {
                            board_text += "&nbsp;"
                        }
                        if (c % 3 != 0) {
                            board_text += "&nbsp;│&nbsp;"
                        }

                    }
                }
                if (b % 3 != 0) {
                    board_text += "&nbsp;&nbsp;║&nbsp;&nbsp;"
                }

            }
            if (srow != 2) {
                board_text += "<br>&nbsp;"
                for (let b of boards) {
                    if (MASTER_CLOSED_BOARD_OPTIONS.includes(board(b))) {
                        board_text += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
                    } else {
                        board_text += "───┼───┼───"
                    }

                    if (b % 3 != 0) {
                        board_text += "&nbsp;║&nbsp;"
                    }

                }
                board_text += "<br>"
            }
        }
        
        if (Mrow != 2) {
            board_text += "<br> ═════════════╬═════════════╬═════════════ <br>"
        }
        
    }

    var popup = window.open("", "Popup", "width=400,height=400");
    popup.document.write("<html><head><title>Popup</title><style>body {font-family: monospace;}</style></head><body><p id='board'></p></body></html>");
    popup.document.getElementById("board").innerHTML = board_text;
}