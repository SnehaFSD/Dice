//Start the game
let currentPlayer = 1;
    let player1Score = 0;
    let player2Score = 0;

    function startGame() {
      document.getElementById('rollButton').disabled = false;
      document.getElementById('resetButton').disabled = true;
      currentPlayer = Math.floor(Math.random() * 2) + 1;
      alert(`Player ${currentPlayer} starts the game.`);
    }

    function rollDice() {
      const diceValue = Math.floor(Math.random() * 6) + 1;
      alert(`Player ${currentPlayer} rolled a ${diceValue}.`);

      if (currentPlayer === 1) {
        player1Score += diceValue;
        document.getElementById('player1Score').textContent = player1Score;
      } else {
        player2Score += diceValue;
        document.getElementById('player2Score').textContent = player2Score;
      }

      if (player1Score >= 30 || player2Score >= 30) {
        alert(`Player ${currentPlayer} wins!`);
        document.getElementById('rollButton').disabled = true;
        document.getElementById('resetButton').disabled = false;
      } else {
        currentPlayer = currentPlayer === 1 ? 2 : 1;
        alert(`Player ${currentPlayer}'s turn.`);
      }
    }

    function resetGame() {
      currentPlayer = 1;
      player1Score = 0;
      player2Score = 0;
      document.getElementById('player1Score').textContent = player1Score;
      document.getElementById('player2Score').textContent = player2Score;
      document.getElementById('rollButton').disabled = false;
      document.getElementById('resetButton').disabled = true;
      alert('Game has been reset.');
    }