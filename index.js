console.log("This is the game of Rock Paper Scissors");

function MainFunction(item, isUser) {
  var chatContainer = document.getElementById("chat-container");
  var messageElement = document.createElement("div");
  messageElement.className = isUser ? "user-message" : "bot-message";
  messageElement.innerHTML = `You clicked ${item}`;
  chatContainer.appendChild(messageElement);

  setTimeout(function () {
    computerClick(item);
  }, 247);
}

function computerClick(userClicked) {
  var chatContainer = document.getElementById("chat-container");
  var messageElement = document.createElement("div");

  var ComputerClicked = GenerateNumber();
  switch (ComputerClicked) {
    case 0:
      ComputerClicked = "scissor";
      break;
    case 1:
      ComputerClicked = "paper";
      break;
    default:
      ComputerClicked = "stone";
      break;
  }

  messageElement.innerHTML = `Computer clicked ${ComputerClicked}`;
  chatContainer.appendChild(messageElement);

  setTimeout(function () {
    ResultFunction(userClicked, ComputerClicked);
  }, 247);
}

function ResultFunction(userClicked, ComputerClicked) {
  var chatContainer = document.getElementById("chat-container");
  var messageElement = document.createElement("div");

  //here is code of checking who is winner
  winner = CheckWinner(userClicked, ComputerClicked);

  if (winner == "" || winner == "tie") {
    winner = "No one";
  }

  messageElement.className = getClass(winner);

  messageElement.innerHTML = `The winner is  ${winner} </br>`;
  chatContainer.appendChild(messageElement);

 editScore(winner);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function editScore(winner) {

 
  if (winner == "computer") {
    var scoreElement = document.getElementById("computer_score").getElementsByClassName("score")[0];
    var currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + 1;
    if (currentScore + 1 == 5) {
      alert("Computer win");
      animateFirework();
      clearBoxes();
    }
  }
  if (winner == "user") {
    var scoreElement = document.getElementById("user_score").getElementsByClassName("score")[0];
    var currentScore = parseInt(scoreElement.textContent);
    scoreElement.textContent = currentScore + 1;
    if (currentScore + 1 == 5) {
      alert("User won");
      animateFirework();
      clearBoxes();
    }
  }
}

function GenerateNumber() {
  return Math.floor(Math.random() * 3);
}

function CheckWinner(userClicked, ComputerClicked) {
  var Winner = "";
  //Checking scissors
  if (userClicked == "scissor") {
    if (ComputerClicked == "paper") {
      Winner = "user";
    } else if (ComputerClicked == "stone") {
      Winner = "computer";
    } else {
      Winner = "tie";
    }
  }

  //Checking paper
  if (userClicked == "paper") {
    if (ComputerClicked == "scissor") {
      Winner = "computer";
    } else if (ComputerClicked == "stone") {
      Winner = "user";
    } else {
      Winner = "tie";
    }
  }

  //Checking stone
  if (userClicked == "stone") {
    if (ComputerClicked == "scissor") {
      Winner = "user";
    } else if (ComputerClicked == "paper") {
      Winner = "computer";
    } else {
      Winner = "tie";
    }
  }
  return Winner;
}

function getClass(winner) {
  if (winner == "computer") {
    return "red";
  } else if (winner == "user") {
    return "green";
  } else {
    return "gray";
  }
}

//Erasing used fields
function clearBoxes() {
    var chatContainer = document.getElementById("chat-container");
    chatContainer.innerHTML = '';
    var scoreElement = document.getElementById("user_score").getElementsByClassName("score")[0];
    scoreElement.innerHTML = '0';
    var scoreElement = document.getElementById("computer_score").getElementsByClassName("score")[0];
    scoreElement.innerHTML = '0';
}

function animateFirework() {
    var firework = document.createElement('div');
    firework.className = 'firework';
    document.body.appendChild(firework);

    setTimeout(function () {
        document.body.removeChild(firework);
    }, 8000); // Remove the firework element after 2 seconds
}