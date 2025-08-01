let board = [];
let currentPlayer = "X";
let size = 3;
let gameEnded = false;

function createBoard() {
    let table = document.getElementById("board");
    table.innerHTML = ""; // Xóa bàn cũ nếu có
    for (let i = 0; i < size; i++) {
        board[i] = [];
        let row = table.insertRow();
        for (let j = 0; j < size; j++) {
            board[i][j] = ".";
            let cell = row.insertCell();
            cell.textContent = ".";
            cell.addEventListener("click", function () {
                makeMove(i, j, cell);
            });
        }
    }
}

function makeMove(i, j, cell) {
    if (board[i][j] === "." && !gameEnded) {
        board[i][j] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWin(i, j)) {
            document.getElementById("result").textContent = `Người chơi ${currentPlayer} thắng!`;
            gameEnded = true;
        } else {
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            document.getElementById("currentPlayer").textContent = currentPlayer;
        }
    }
}

function checkWin(i, j) {
    // Kiểm tra hàng
    if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer)
        return true;

    // Kiểm tra cột
    if (board[0][j] === currentPlayer && board[1][j] === currentPlayer && board[2][j] === currentPlayer)
        return true;

    // Kiểm tra chéo chính
    if (i === j && board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer)
        return true;

    // Kiểm tra chéo phụ
    if (i + j === 2 && board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer)
        return true;

    return false;
}

function resetGame() {
    currentPlayer = "X";
    gameEnded = false;
    document.getElementById("currentPlayer").textContent = currentPlayer;
    document.getElementById("result").textContent = "";
    createBoard();
}

// Bắt đầu game lần đầu
createBoard();