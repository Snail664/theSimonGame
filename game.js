// *** Button ID list ***

var buttonids = ["#green", "#red", "#blue", "#yellow"];

// *** CLICK EVENTS ***

// $("#green").click(function () {
//   $("#green").fadeOut(250).fadeIn(250);
//   var audio = new Audio("sounds/" + "#green".substring(1) + ".mp3");
//   audio.play();
// });

// $("#red").click(function () {
//   $("#red").fadeOut(250).fadeIn(250);
//   var audio = new Audio("sounds/" + "#red".substring(1) + ".mp3");
//   audio.play();
// });

// $("#blue").click(function () {
//   $("#blue").fadeOut(250).fadeIn(250);
//   var audio = new Audio("sounds/" + "#blue".substring(1) + ".mp3");
//   audio.play();
// });

// $("#yellow").click(function () {
//   $("#yellow").fadeOut(250).fadeIn(250);
//   var audio = new Audio("sounds/" + "#yellow".substring(1) + ".mp3");
//   audio.play();
// });

// *** CLICK EVENTS END ***

// *** Animation function ***

function animate(buttoncolour) {
  $(buttoncolour).fadeOut(250).fadeIn(250);
  var audio = new Audio("sounds/" + buttoncolour.substring(1) + ".mp3");
  audio.play();
}

// *** Animation function end ***

// *** GAME START ***

$("h1").on("click", function () {
  startgame();
});

function startgame() {
  $("h1").fadeOut(200);
  var turnNumber = 0;
  var listOfButtonIDs = [];
  //Cannot declare as global variable, pass on to the next function as arguments
  turnStart(turnNumber, listOfButtonIDs);
}

function turnStart(turn, list) {
  var turnNumber = turn++;
  $("h1").text("Level " + turnNumber.toString());
  // choose one buttonid and add to lizt
  var liztid = Math.floor(Math.random() * 4);
  var listOfButtons = list.push(buttonids[liztid]);

  //animate the buttons
  for (button in listOfButtons) {
    window.setTimeout(animate(button), 500);
  }

  //pass arguments onto the next function
  userPlays(turnNumber, listOfButtons);
}

function userPlays(turn, list) {
  //create the list of user clicks
  var userList = [];

  // while userclicks
  while (userList.length <= turn) {
    $("#green").click(function () {
      animate("#green");
      userList.push("#green");
    });

    $("#red").click(function () {
      animate("#red");
      userList.push("#red");
    });

    $("#blue").click(function () {
      animate("#blue");
      userList.push("#blue");
    });

    $("#yellow").click(function () {
      animate("#yellow");
      userList.push("#yellow");
    });
  }

  if (userList === list) {
    turnStart(turn, list);
  } else {
    gameover();
  }
}

function gameover() {
  $("h1").text("Game over! Press any key to start again");
  $(document).on("keypress", function () {
    startgame();
  });
}
