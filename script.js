// let ball = document.querySelector(".ball");
// let board = document.querySelector(".board");
// let boardBounds = board.getBoundingClientRect();
// let leftPaddle = document.querySelector(".left");
// let rightPaddle = document.querySelector(".right");
// let x = true;
// let y = true;
// let leftPlayerLives = 3;
// let rightPlayerLives = 3;
// function setColor(indx){
//     let allIcons = document.querySelectorAll(".fas.fa-circle");
//     allIcons[indx].style.color = "#686de0";
// }

// function resetGame(){
//     ball.style.top = window.innerHeight * 0.45 + "px";
//     ball.style.left = window.innerWidth * 0.45 + "px";
//     requestAnimationFrame(moveBall);
// }

// // user input listen
// document.addEventListener("keydown", function(e){
//     if(e.key == "w"){
//         movePaddle(leftPaddle, -window.innerHeight * 0.1);
//     }else if(e.key == "s"){
//         movePaddle(leftPaddle, window.innerHeight * 0.1);
//     }else if(e.key == "ArrowUp"){
//         movePaddle(rightPaddle, -window.innerHeight * 0.1);  
//     }else if( e.key == "ArrowDown"){
//         movePaddle(rightPaddle, window.innerHeight * 0.1);
//     }
// });

// function movePaddle(cPaddle, change){
    
//     let cPaddleBounds = cPaddle.getBoundingClientRect();
//     if(cPaddleBounds.top+change >= boardBounds.top && cPaddleBounds.bottom+change <= boardBounds.bottom){
//         cPaddle.style.top = cPaddleBounds.top+change + "px";
//     }   
// }

// function moveBall(){
//     let ballCord = ball.getBoundingClientRect();
//     let ballTop = ballCord.top;
//     let ballLeft = ballCord.left;
//     let ballBottom = ballCord.bottom;
//     let ballRight = ballCord.right;

//     // check if collided with any players horizontal boundary
//     let hasTouchedLeft = ballLeft < boardBounds.left;
//     let hasTouchedRight = ballRight > boardBounds.right;

//     if(hasTouchedLeft || hasTouchedRight){
//         if(hasTouchedLeft){
//             leftPlayerLives--;
//             setColor(leftPlayerLives);  // lives treated as index
//             if(leftPlayerLives == 0){
//                 alert("Player 🅱 won the game💥");
//                 document.location.reload();
//             }
//             resetGame();
//         }else{
//             rightPlayerLives--;
//             setColor(leftPlayerLives + 3);
//             if(rightPlayerLives == 0){
//                 alert("Player 🅰 won the game💥");
//                 document.location.reload();
//             }
//             resetGame();
//         }
//     }

//     // is ball in bound
//     // handle vertical bound
//     if(ballTop <= boardBounds.top || ballBottom >= boardBounds.bottom){
//         // vertically outside
//         y =! y;
//     }

//     // handle horizontal bound
//     if(ballLeft <= boardBounds.left || ballRight >= boardBounds.right){
//         //horizontally outside
//         x =! x;
//     }

//     let leftPaddleBounds = leftPaddle.getBoundingClientRect();
//     let rightPaddleBounds = rightPaddle.getBoundingClientRect();

//     // left collision
//     if(ballLeft <= leftPaddleBounds.right && ballRight >= leftPaddleBounds.left && ballTop >= leftPaddleBounds.top + 30 && ballBottom - 30 <= leftPaddleBounds.bottom){
//         x =! x;

//     }
//     //right collision
//     if(ballLeft <= rightPaddleBounds.left && ballRight >= rightPaddleBounds.left && ballTop + 30 >= rightPaddleBounds.top && ballBottom - 30 <= rightPaddleBounds.bottom){
//         x =! x;
//     }
//     //issue
    
//     ball.style.top = y== true? ballTop + 4 + "px" : ballTop - 4 + "px";
//     ball.style.left = x == true ? ballLeft + 4 + "px" : ballLeft - 4 + "px";
//     requestAnimationFrame(moveBall);
// }
// requestAnimationFrame(moveBall);  
const body = document.querySelector("body");
const leftPaddle = document.querySelector(".left");
const rightPaddle = document.querySelector(".right");
const board = document.querySelector(".board");
const ball = document.querySelector(".ball");
const boardData = board.getBoundingClientRect();
const boardTop = boardData.top;
const boardBottom = boardData.bottom;
const boardRight = boardData.right;
const boardLeft = boardData.left;
let xd = true;
let yd = true;
let leftPlayerLife = 3;
let rightPlayerlife = 3;
body.addEventListener("keydown", function (e) {
    // console.log(e);
    if (e.key == "w") {
        // move left paddle up in bounds
        move(leftPaddle, -60);
    } else if (e.key == "s") {
        move(leftPaddle, 60);
        // move left paddle down in bounds
    }
    else if (e.key == "ArrowUp") {
        move(rightPaddle, -60);
        // move right paddle up in bounds
    } else if (e.key == "ArrowDown") {
        // move right paddle down in bounds
        move(rightPaddle, 60);
    }
})
function move(cPaddle, delta) {
    let { top } = cPaddle.getBoundingClientRect();
    let finalTop = top + delta;
    if (delta > 0 && finalTop >= boardBottom) {
        return;
    }
    else if (finalTop <= boardTop) {
        return;
    }

    cPaddle.style.top = finalTop + "px";

}



function MoveBall() {
    // ******************did ball touched the walls*******************************
    // ***********************************************
    let ballPosCord = ball.getBoundingClientRect();
    let leftPaddleCord = leftPaddle.getBoundingClientRect();
    let rightPaddleCord = rightPaddle.getBoundingClientRect();
    let leftOfBall = ballPosCord.left;
    let bottomOfBall = ballPosCord.bottom;
    let rightOfBall = ballPosCord.right;
    let topOfBall = ballPosCord.top;
    let hasLeftWallTouched = ballPosCord.left < boardLeft;
    let hasrightWallTouched = ballPosCord.right > boardRight;
    if (hasLeftWallTouched || hasrightWallTouched) {
        if (hasrightWallTouched) {
            rightPlayerlife--;
            setColor(rightPlayerlife + 3);
            if (rightPlayerlife == 0) {
                body.style.background = "gray";
                alert("Game Over Player 1️⃣ won 🎉🎉");
                document.location.reload();
                return;
            } else {
                reset(ball);
                return;
            }
        } else {
            leftPlayerLife--;
            setColor(leftPlayerLife);
            if (leftPlayerLife == 0) {
                body.style.background = "gray";
                alert("Game Over Player 2️⃣ won 🎉🎉");
                document.location.reload();
                return;
            } else {
                reset(ball);
                return;
            }
        }
    }
    // 
    if (topOfBall <= boardTop || bottomOfBall >= boardBottom) {
        yd = !yd
    }
    if (leftOfBall <= leftPaddleCord.right && rightOfBall >= leftPaddleCord.left && topOfBall >= leftPaddleCord.top - 15 && bottomOfBall <= leftPaddleCord.bottom + 15) {
        xd = !xd;
    }
    if (leftOfBall <= rightPaddleCord.right && rightOfBall >= rightPaddleCord.left && topOfBall >= rightPaddleCord.top - 15 && bottomOfBall <= rightPaddleCord.bottom + 15) {
        xd = !xd;
    }
    ball.style.top = yd == true ? (topOfBall - 4) + "px" : (topOfBall + 4) + "px";
    ball.style.left = xd == true ? (leftOfBall - 6) + "px" : (leftOfBall + 6) + "px";
    // console.log(ball.style.top,ball.style.left)
    requestAnimationFrame(MoveBall);
}
function reset(ball) {
    ball.style.top = window.innerHeight * 0.45 + "px";
    ball.style.left = window.innerWidth * 0.5 + "px";
    requestAnimationFrame(MoveBall);
    initx = 6;
}
function setColor(idx) {
    let colors = document.querySelectorAll(".fa-circle");
    colors[idx].style.color = "#686de0";
}
alert("Are you Ready🚀🚀");
requestAnimationFrame(MoveBall)

