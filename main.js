let rotInt;
value = 0;
const rotate = function() {
  if (event.key == " ") {
    rotInt = setInterval(function() {
      for (let i = 1; i <= 3; i++) {
        if (
          +document.getElementById("dragon").style.bottom.replace("px", "") <
            100 &&
          +document.getElementById(i).style.marginLeft.replace("px", "") < 50
        ) {
          document.getElementById("dragon").style.webkitTransform =
            "rotate(-30deg)";
          clearInterval(rotInt);
          setTimeout(() => {
            alert(
              "Game Over!!\nYour Score : " +
                value +
                "\nDo you want to play again?"
            );
            document.location.reload();
          }, 1);
        }
        margin =
          +document.getElementById(i).style.marginLeft.replace("px", "") - 1;
        if (margin <= -10) {
          document.getElementById("score").innerText = value + 1;
          value = value + 1;
          document.getElementById(i).style.height =
            Math.random() * (100 - 50) + 50 + "px";
          margin = 1400;
        }
        document.getElementById(i).style.marginLeft = margin + "px";
      }
    }, 2);
  }
};
const jump = function() {
  document.getElementById("dragon").style.bottom = 100 + "px";
  setTimeout(() => {
    document.getElementById("dragon").style.bottom = -10 + "px";
  }, 400);
};
