# SuperTicTacToe

This is a website to play Super Tic Tac Toe: https://en.wikipedia.org/wiki/Ultimate_tic-tac-toe

The end goal is to allow other people to submit their own AIs and either play against them or pit two AIs against each other.

To submit an AI follow these steps:
 1. add a file called "AI_your_ai_name.js" to the "AI" folder
 2. In you file, have a function called `AI_your_ai_name_bestMove()` that returns the best next move (see `AI_random_bestMove()` for documentation)
 3. In the "AI/AI_base.js" file, add your AI to the dictionary called `AIs` as such:
    - `'your_ai_name': { 'Name': "Your AI Name", "Function": AI_your_ai_name_bestMove },`
