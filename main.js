const rotate = function() {
  if (event.key == " ") {
    setInterval(function() {
      for (let i = 1; i <= 3; i++) {
        margin =
          +document.getElementById(i).style.marginLeft.replace("px", "") - 1;
        if (margin <= 0) {
          document.getElementById(i).style.height =
            Math.random() * (100 - 50) + 50 + "px";
          margin = 1400;
        }
        document.getElementById(i).style.marginLeft = margin + "px";
      }
    }, 0.5);
  }
};
const jump = function() {
  setTimeout(() => {
    hgt =
      +document.getElementById("dragon").style.bottom.replace("px", "") + 100;
    document.getElementById("dragon").style.bottom = hgt + "px";
  }, 500);
  hgt = +document.getElementById("dragon").style.bottom.replace("px", "") - 100;
  document.getElementById("dragon").style.bottom = hgt + "px";
};
