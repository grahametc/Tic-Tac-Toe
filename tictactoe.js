let oneA = document.getElementById("1a");
let oneB = document.getElementById("1b");
let oneC = document.getElementById("1c");
let twoA = document.getElementById("2a");
let twoB = document.getElementById("2b");
let twoC = document.getElementById("2c");
let threeA = document.getElementById("3a");
let threeB = document.getElementById("3b");
let threeC = document.getElementById("3c");
let winText = document.getElementById("winnerText");
let resetButton = document.getElementById("reset");
let gameOver = false;
let turn = 0;

let row1 = ['','',''];
let row2 = ['','',''];
let row3 = ['','',''];

oneA.addEventListener("click", function(){
    let clicked = oneA.value != '';
    append(clicked,row1, 0);
    clck(oneA);
});
oneB.addEventListener("click", function(){
    let clicked = oneB.value != '';
    append(clicked,row1, 1);
    clck(oneB);
});
oneC.addEventListener("click", function(){
    let clicked = oneC.value != '';
    append(clicked,row1, 2);
    clck(oneC);
});
twoA.addEventListener("click", function(){
    let clicked = twoA.value != '';
    append(clicked,row2, 0);
    clck(twoA);
});
twoB.addEventListener("click", function(){
    let clicked = twoB.value != '';
    append(clicked,row2, 1);
    clck(twoB);
});
twoC.addEventListener("click", function(){
   let clicked = twoC.value != '';
    append(clicked,row2, 2);
    clck(twoC);
});
threeA.addEventListener("click", function(){
     let clicked = threeA.value != '';
    append(clicked,row3, 0);
    clck(threeA);
});
threeB.addEventListener("click", function(){
    let clicked = threeB.value != '';
    append(clicked, row3, 1);
    clck(threeB);
});
threeC.addEventListener("click", function(){
    let clicked = threeC.value != '';
    append(clicked,row3, 2);
    clck(threeC);
});



function clck(square){
    if(gameOver){
        return;
    }
    console.log('yo');
    if(square.value == ''){
   switch(turn){
    case 0: 
        square.value = 'X'
        turn = 1;
        break;
    case 1: 
    square.value = 'O';
    turn = 0;
    break;
   }
   }
    let winner = checkWin();
    console.log(winner);
    let vacant = checkSquares();
    console.log(vacant);
    if(winner == 2){
        winText.innerHTML = "X wins"; 
        gameOver = true;
    }else if(winner == 1){
        winText.innerHTML = "O wins";
        gameOver = true;
    } else if((!vacant) && winner === 0){
        winText.innerHTML = "Draw";
        gameOver = true;
        console.log("draw");
        console.log(winner);
    }
    }    
   

function checkWin(){
    let winner = 0;
    // row wins
    let row1Sum = row1.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let row2Sum = row2.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let row3Sum = row3.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    let rowSums = [row1Sum, row2Sum, row3Sum];
  for(let i = 0; i < rowSums.length; i++){
    if(rowSums[i] === 0){
        winner = 1;
        return winner;
    } else if(rowSums[i] === 3){
        winner = 2;
        return winner;
    }
}
// col wins
    let col1Sum = row1[0] + row2[0] + row3[0];
    let col2Sum = row1[1] + row2[1] + row3[1];
    let col3Sum = row1[2] + row2[2] + row3[2];
    let colSums = [col1Sum, col2Sum, col3Sum];
    console.log(colSums);
    for(let j = 0; j < colSums.length; j++){
        if(colSums[j] === 0){
            winner = 1;
            return winner;
        } else if(colSums[j] === 3){
            winner = 2;
            return winner;
        }
    }
// diagonal wins
    let diagonal1 = row1[0] + row2[1] + row3[2];
    let diagonal2 = row1[2] + row2[1] + row3[0];
    let diagonalSums = [diagonal1, diagonal2];
    for(let k = 0; k < diagonalSums.length; k++){
        if(diagonalSums[k] === 0){
            winner = 1;
            return winner;
        } else if(diagonalSums[k] === 3){
            winner = 2;
            return winner;
        }
}
    return 0;
}


function checkSquares(){
    let board = row1.concat(row2, row3);
    console.log(board);
     for(let i = 0; i < board.length; i++){
        if(board[i] === ''){
            console.log(board[i]);
            return true;
        } 
     }
     console.log('1');
     return false;
}
function append(clicked, row, col){
    if(!clicked){
    if(turn == 0){
        row[col] = 1;  
      } else{
          row[col] = 0; 
      }
      console.log(row1, row2, row3);
    }  
}

function resetBoard(){
    row1 = row1.fill('', 0, row1.length);
    row2 = row2.fill('', 0, row2.length);
    row3 = row3.fill('', 0, row3.length);
    let sqrArray = [oneA, oneB, oneC, twoA, twoB, twoC, threeA, threeB, threeC];
    for(let i = 0; i < sqrArray.length; i++){
        sqrArray[i].value = '';
    }
    winText.innerHTML = "";
    turn = 0;
    gameOver = false;
}

resetButton.addEventListener("click", function(){
    resetBoard();
});