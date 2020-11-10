// *** Animation function ***

function animate(buttoncolourid) {
  $(buttoncolourid).fadeOut(250).fadeIn(250);
  var audio = new Audio("sounds/" + buttoncolourid.substring(1) + ".mp3");
  audio.play();
}

// *** Animation function end ***

// *** Button ID list ***

var buttonids = ["#green", "#red", "#blue", "#yellow"];

// *** For loop for animations ***

for (id of buttonids) {
  $(id).click(function () {
    animate(id);
  })
}



