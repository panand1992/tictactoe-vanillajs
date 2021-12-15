let turn = true;

const boardCells = document.querySelectorAll(".cell");
const board = document.getElementById('board');

boardCells.forEach(cell => {
    cell.addEventListener('click', cellClick);
});

function cellClick(e) {
    const currentCell = e.target;

    if (turn) {
        currentCell.classList.add('x');
    } else {
        currentCell.classList.add('circle');
    }

    turn = !turn;
    setNextPlayerHint();
    checkGameStatus();
}

function setNextPlayerHint() {
    board.classList.remove('x');
    board.classList.remove('circle');
    if (turn) {
        board.classList.add('x');
    } else {
        board.classList.add('circle');
    }
}

function startGame() {
    setNextPlayerHint();
}

function checkGameStatus() {
    var r11 = boardCells[0].classList[1];
    var r12 = boardCells[1].classList[1];
    var r13 = boardCells[2].classList[1];
    var r21 = boardCells[3].classList[1];
    var r22 = boardCells[4].classList[1];
    var r23 = boardCells[5].classList[1];
    var r31 = boardCells[6].classList[1];
    var r32 = boardCells[7].classList[1];
    var r33 = boardCells[8].classList[1];

    if (r11 && r11 === r12 && r11 === r13) {
        announceWinner(r11);
    } else if (r21 && r21 === r22 && r21 === r23) {
        announceWinner(r21);
    } else if (r31 && r31 === r32 && r32 === r33) {
        announceWinner(r31);
    } else if (r11 && r11 === r21 && r11 === r31) {
        announceWinner(r11);
    } else if (r12 && r12 === r22 && r12 === r32) {
        announceWinner(r12);
    } else if (r13 && r13 === r23 && r13 === r33) {
        announceWinner(r13);
    } else if (r11 && r11 === r22 && r11 === r33) {
        announceWinner(r11);
    } else if (r13 && r13 === r22 && r13 === r31) {
        announceWinner(r13);
    } else {
        checkDraw();
    }
}

function announceWinner() {
    document.getElementById('winning-message').innerText = `${turn ? "O's" : "X's"} Wins!`;
}

function checkDraw() {
    for (const i of boardCells) {
        if (i.classList[1] === 'x' || i.classList[1] === 'circle') {
            continue;
        } else {
            return
        }
    }
    document.getElementById('winning-message').innerText = 'Its a Draw!!';
}

startGame();