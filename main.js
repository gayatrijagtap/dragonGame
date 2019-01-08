let value = 0;

const getDimension = function(element, attribute) {
  return +element.style[attribute].replace("px", "");
};

const getElement = function(id) {
  return document.getElementById(id);
};

const decideMovement = function(event) {
  let events = new Object();
  events[" "] = startDragonRun;
  events["j"] = jumpDragon;
  events[event.key]();
};

const gameOver = function(dragonBottom, barMarginLeft, interval) {
  let maxBarHeight = 100;
  let barMarginLimit = 50;
  if (dragonBottom < maxBarHeight && barMarginLeft < barMarginLimit) {
    dragon.style.webkitTransform = "rotate(-30deg)";
    clearInterval(interval);
    let gameEnd = getElement("gameOver");
    gameEnd.style.display = "inline";
  }
};

const reload = function() {
  document.location.reload();
};

const startDragonRun = function() {
  let interval = setInterval(function() {
    for (let barId = 1; barId <= 3; barId++) {
      let dragon = getElement("dragon");
      let dragonBottom = getDimension(dragon, "bottom");
      let bar = getElement(barId.toString());
      let barMarginLeft = getDimension(bar, "marginLeft");
      gameOver(dragonBottom, barMarginLeft, interval);
      barMargin = moveBar(barId, barMarginLeft);
      document.getElementById(barId).style.marginLeft = barMargin + "px";
    }
  }, 2);
};

const moveBar = function(barId, barMarginLeft) {
  let score = getElement("score");
  let barMargin = barMarginLeft - 1;
  if (barMargin <= -10) {
    score.innerText = value += 1;
    document.getElementById(barId).style.height =
      Math.random() * (100 - 50) + 50 + "px";
    barMargin = 1400;
  }
  return barMargin;
};

const jumpDragon = function() {
  let jumpTime = 400;
  let jumpHeight = 100;
  document.getElementById("dragon").style.bottom = jumpHeight + "px";
  setTimeout(() => {
    document.getElementById("dragon").style.bottom = -10 + "px";
  }, jumpTime);
};
