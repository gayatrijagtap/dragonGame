const getBody = document => document.getElementById("bd");

const getReload = document => document.getElementById("reload");

const getDragon = document => document.getElementById("dragon");

const decideMovement = function(event) {
  let dragon = getDragon(document);
  let events = new Object();
  events[" "] = exportFunction.runDragon;
  events["j"] = exportFunction.jumpDragon;
  events[event.key](dragon);
};

const refreshPage = function() {
  document.location.reload();
};

const addKeyListener = function(document) {
  let body = getBody(document);
  body.onkeypress = decideMovement;
};

const addClickListener = function(document) {
  let reload = getReload(document);
  reload.onclick = refreshPage;
};

const initialize = function() {
  addKeyListener(document);
  addClickListener(document);
};

window.onload = initialize;
