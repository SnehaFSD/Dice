//Start the game
let currentPlayer = 1;
    let player1Score = 0;
    let player2Score = 0;
    
    function startGame() {
        document.getElementById('rollButton')= false;
        document.getElementById('resetButton') = true;
        currentPlayer = Math.floor(Math.random() * 2) + 1;
      }
  
      function rollDice() {
        const diceValue = Math.floor(Math.random() * 6) + 1;
  
        if (currentPlayer === 1) {
          player1Score += diceValue;
          document.getElementById('player1Score').textContent = player1Score;
        } else {
          player2Score += diceValue;
          document.getElementById('player2Score').textContent = player2Score;
        }
  
        if (player1Score >= 30 || player2Score >= 30) {
          document.getElementById('rollButton') = true;
          document.getElementById('resetButton')= false;
        } else {
          currentPlayer = currentPlayer === 1;
        }
      }
  
      function resetGame() {
        currentPlayer = 1;
        player1Score = 0;
        player2Score = 0;
        document.getElementById('player1Score') = player1Score;
        document.getElementById('player2Score') = player2Score;
        alert('Game reset.');
      }