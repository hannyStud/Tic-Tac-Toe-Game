console.log("Welcome to Tic Tac Toe")
let music = new Audio("tic tac toe/music.mp3")
let turn = new Audio("tic tac toe/ting.mp3")
let gameover = new Audio("tic tac toe/gameover.mp3")
let turn1 = "X"
let isgameover = false;

//function to change the turn
const changeTurn = () => {
    return turn1 === "X" ? "O" : "X";
}

//Function to for a win
const checkWin = () => {
    let = boxtexts = document.getElementsByClassName('boxtext');
    let win = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    win.forEach(e => {
        if ((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText == boxtexts[e[2]].innerText) && (boxtexts[e[0]].innerText !== "")) {
            document.querySelector('.Info').innerText = boxtexts[e[0]].innerText + " Won"
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    })
}

//Game Logic
let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === "") {
            boxtext.innerText = turn1;
            turn1 = changeTurn();
            turn.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn1;
            }
        }
    })

})

// Add onclick listener to reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    })
    turn1 = "X";
    isgameover = false;
    document.getElementsByClassName("Info")[0].innerText = "Turn for " + turn1;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";

})