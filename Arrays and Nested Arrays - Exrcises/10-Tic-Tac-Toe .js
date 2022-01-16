function ticTacToe(input) {
  let field = [[], [], []];
  let player = 'X';

  for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 3; col++) {
      field[row][col] = false;
    }
  }

  for (let i = 0; i < input.length; i++) {
      let params = input[i].split(" ");
      let row = params[0];
      let col = params[1];
      if (field[row][col] === false) {
        field[row][col] = player;
        
        if(checkIsWin(field, row, col, player)) {
            console.log(`Player ${player} wins!`)
            printField(field);
            break;
        }
        if(player === 'X') {
            player = 'O'
        } else {
            player = 'X'
        }
      } else {
          console.log('This place is already taken. Please choose another!');
      }
     if(!checkIsFreeFields(field)) {
        console.log('The game ended! Nobody wins :(');
        printField(field);
        break;
      }
  }



  function printField(field) {
      for (let row = 0; row < field.length; row++) {
          console.log(field[row].join('\t'));
      }
  }

  function checkIsWin(field, row, col, player) {
    if (
      checkRow(field, row, player) ||
      checkCol(field, col, player) ||
      checkRightDiagonals(field, player) ||
      checkLeftDiagonals(field, player)
    ) {
      return true;
    } else {
      return false;
    }
  }

  function checkRow(field, row, player) {
    for (let col = 0; col < field.length; col++) {
      if (field[row][col] !== player) {
        return false;
      }
    }

    return true;
  }

  function checkCol(field, col, player) {
    for (let row = 0; row < field.length; row++) {
      if (field[row][col] !== player) {
        return false;
      }
    }

    return true;
  }

  function checkRightDiagonals(field, player) {
    for (let row = 0; row < field.length; row++) {
      for (let col = 0; col < field.length; col++) {
        if (col === row) {
          if (field[row][col] !== player) {
            return false;
          }
        }
      }
    }

    return true;
  }

  function checkLeftDiagonals(field, player) {
    for (let row = 0; row < field.length; row++) {
      for (let col = field.length - 1; col >= 0; col--) {
        if (field[row][col - row] !== player) {
          return false;
        }
        break;
      }
    }

    return true;
  }

  function checkIsFreeFields(field) {
      let hasFree = false;
    for (let row = 0; row < field.length; row++) {
        if(field[row].includes(false)) {
            hasFree = true;
        }
     }
     return hasFree;
   
  }
}

ticTacToe(["0 1",
"0 0",
"0 2", 
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]
);
