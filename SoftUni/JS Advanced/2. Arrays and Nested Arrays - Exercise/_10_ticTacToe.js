/* eslint-disable */
function ticTacToe(movesArray) {
    const board = [
        ['false', 'false', 'false'],
        ['false', 'false', 'false'],
        ['false', 'false', 'false'],
    ]

    let isPlayerX = true
    for (let index = 0; index < movesArray.length; index++) {
        const move = movesArray[index].split(' ').map((x) => Number(x))
        const row = move[0]
        const col = move[1]

        // check for invalid move
        if (board[row][col] !== 'false') {
            console.log('This place is already taken. Please choose another!')
            continue
        }

        board[row][col] = isPlayerX ? 'X' : 'O'
        // change player
        isPlayerX = !isPlayerX
        const gameEnded = hasGameEnded(board)
        if (gameEnded) {
            break
        }
    }

    for (let index = 0; index < board.length; index++) {
        console.log(board[index].join('\t'))
    }

    function hasGameEnded(board) {
        // check the rows
        for (let row = 0; row < board.length; row++) {
            if (board[row].every((x) => x === 'X') || board[row].every((x) => x === 'O')) {
                console.log(`Player ${board[row][0]} wins!`)
                return true
            }
        }

        // check the columns
        for (let col = 0; col < board[0].length; col++) {
            if (board[0][col] === board[1][col] && board[1][col] === board[2][col] && board[0][col] !== 'false') {
                console.log(`Player ${board[0][col]} wins!`)
                return true
            }
        }

        // check the main diagonal
        if (board[0][0] === board[1][1] && board[1][1] === board[2][2] && board[0][0] !== 'false') {
            console.log(`Player ${board[0][0]} wins!`)
            return true
        }

        // check the second diagonal
        if (board[0][2] === board[1][1] && board[1][1] === board[2][0] && board[2][0] !== 'false') {
            console.log(`Player ${board[2][0]} wins!`)
            return true
        }

        // check if the board has been filled
        if (
            board[0].every((x) => x !== 'false') &&
            board[1].every((x) => x !== 'false') &&
            board[2].every((x) => x !== 'false')
        ) {
            console.log('The game ended! Nobody wins :(')
            return true
        }

        return false
    }
}
