console.log("Welcome to Tic Tac Toe")
let winner = new Audio("win.mp3")
let audioturn = new Audio("ting.mp3")
let turn = "X"
let gameover = false;
// let count=0;

//Function to change the turn
const changeturn = () => {
    return turn === "X" ? "0" : "X"
}

//function to check for win
const checkwin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
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
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") && count===1) {
            document.querySelector('.info').innerText = boxtext[e[0]].innerText + "won"
            gameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="200px";
            winner.play();
            // count=1;
        }
    })
}

// Game Logic 
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && count==0) {
            boxtext.innerText = turn;
            turn = changeturn();
            audioturn.play();
            checkwin();
            if (!gameover && count==0) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn
            }
        }
    })
    
})


reset.addEventListener('click', ()=>{
   let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width="0px"
})