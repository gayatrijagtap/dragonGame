const exportFunction = (function() {
  let value = 0;

  const getDimension = function(element, attribute) {
    return +element.style[attribute].replace("px", "");
  };

  const getElement = function(id) {
    return document.getElementById(id);
  };

  const runBar = function(dragonBottom, interval, barId) {
    let bar = getElement(barId);
    let barMarginLeft = getDimension(bar, "marginLeft");
    gameOver(dragonBottom, barMarginLeft, interval);
    barMargin = moveBar(barId, barMarginLeft);
    document.getElementById(barId).style.marginLeft = barMargin + "px";
  };

  const runDragon = function(dragon) {
    let bars = ["bar1", "bar2", "bar3"];
    let interval = setInterval(function() {
      let dragonBottom = getDimension(dragon, "bottom");
      const runBars = runBar.bind(null, dragonBottom, interval);
      bars.map(runBars);
    }, 2);
  };

  const moveBar = function(barId, barMarginLeft) {
    let score = getElement("score");
    let barMargin = barMarginLeft - 1;
    if (barMargin <= -10) {
      score.innerText = value += 1;
      document.getElementById(barId).style.height = //make a () resetBarPosition
        Math.random() * (100 - 50) + 50 + "px";
      barMargin = 1400;
    }
    return barMargin;
  };

  const jumpDragon = function(dragon) {
    let jumpTime = 400;
    let jumpHeight = 100;
    dragon.style.bottom = jumpHeight + "px";
    setTimeout(() => {
      dragon.style.bottom = -10 + "px";
    }, jumpTime);
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

  return { runDragon, jumpDragon };
})();
