
// *** Animation function ***

function animate(buttoncolourid) {
    $(buttoncolourid).fadeOut(250).fadeIn(250);
    var audio = new Audio("sounds/" + buttoncolourid.substring(1) + ".mp3");
    audio.play();
  }
  
  // *** Animation function end ***

// *** CLICK EVENTS ***

$("#green").click(function () {
  animate("#green");
});

$("#red").click(function () {
  animate("#red");
});

$("#blue").click(function () {
  animate("#blue");
});

$("#yellow").click(function () {
  animate("#yellow");
});

// *** CLICK EVENTS END ***