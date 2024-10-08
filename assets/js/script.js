//
let title = document.getElementById('title');

let gameStrated = false;
let turn = 'X';
let counter = 0;
let squares = [];


// 
let preparation = window.setInterval(function() {

    title.innerHTML += '.';
    counter++;

    if (counter == 4)
    { 
        window.clearInterval(preparation);
        title.innerHTML = 'Turn: X';
        startTheGame();
    }
}, 1000);


function startTheGame()
{
    gameStrated = true;

    for (let i = 1; i < 10; i++)
    {
        squares[i] = document.getElementById(i);
    }
}

//
function squareClicked(id)    
{   
    if (gameStrated)
    { 
        if (squares[id].innerHTML == '' && turn == 'X') 
        {
            squares[id].innerHTML = 'X';
            turn = 'O';
            title.innerHTML = 'Turn: O';
            checkForWinner();
        }
        else if (squares[id].innerHTML == '' && turn == 'O')
        {
            squares[id].innerHTML = 'O';
            turn = 'X';
            title.innerHTML = 'Turn: X';
            checkForWinner();
        } 
    }
    
}

//
function checker(first, second, third) {
    if ((squares[first].innerHTML == squares[second].innerHTML) && 
        (squares[second].innerHTML == squares[third].innerHTML) &&
        (squares[first].innerHTML != '')) 
    {
        return true;
    }
    else { return false }
}

//
function winner(first, second, third) {
    squares[first].style.backgroundColor = "#198754";
    squares[second].style.backgroundColor = '#198754';
    squares[third].style.backgroundColor = '#198754';
}

//
function endTheGame(message)
{
    gameStrated = false;
    title.innerHTML = message;
    let timer = 0;
    window.setInterval(function() {
         title.innerHTML += '.'; 
         timer++;    
         if (timer == 3) {
            window.location.reload(); 
        }
    }, 1000);
}

//
function noWinner() {
    let empty = 0;

    for (let i = 1; i < squares.length; i++) {
        if (squares[i].innerHTML != '') {
            empty++;
        }
    }
    
    if (empty == 9) { return true }
    else { return false }
}


//
function checkForWinner()
{
    if (checker(1, 2, 3)) { winner(1, 2, 3); endTheGame("Winner"); }

    else if (checker(4, 5, 6)) { winner(4, 5, 6); endTheGame("Winner"); }

    else if (checker(7, 8, 9)) { winner(7, 8, 9); endTheGame("Winner"); }

    else if (checker(1, 4, 7)) { winner(1, 4, 7); endTheGame("Winner"); }

    else if (checker(2, 5, 8)) { winner(2, 5, 8); endTheGame("Winner"); }

    else if (checker(3, 6, 9)) { winner(3, 6, 9); endTheGame("Winner"); }

    else if (checker(1, 5, 9)) { winner(1, 5, 9); endTheGame("Winner"); }

    else if (checker(3, 5, 7)) { winner(3, 5, 7); endTheGame("Winner"); }
    
    else if (noWinner()) { endTheGame("No Winner"); }
}

