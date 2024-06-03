function openshoulderOverlay() {
  var overlay = document.getElementById('shoulderOverlay');
  overlay.style.display = 'flex';
}

function closeshoulderOverlay() {
  var overlay = document.getElementById('shoulderOverlay');
  overlay.style.display = 'none';
}

var shoulder = document.querySelector('.shoulder');
shoulder.addEventListener('click', openshoulderOverlay);

function openchestOverlay() {
  var overlay = document.getElementById('chestOverlay');
  overlay.style.display = 'flex';
}

function closechestOverlay() {
  var overlay = document.getElementById('chestOverlay');
  overlay.style.display = 'none';
}

var chest = document.querySelector('.chest');
chest.addEventListener('click', openchestOverlay);

function openbicepsOverlay() {
  var overlay = document.getElementById('bicepsOverlay');
  overlay.style.display = 'flex';
}

function closebicepsOverlay() {
  var overlay = document.getElementById('bicepsOverlay');
  overlay.style.display = 'none';
}

var biceps = document.querySelector('.biceps');
biceps.addEventListener('click', openbicepsOverlay);

function openabsOverlay() {
  var overlay = document.getElementById('absOverlay');
  overlay.style.display = 'flex';
}

function closeabsOverlay() {
  var overlay = document.getElementById('absOverlay');
  overlay.style.display = 'none';
}

var abs = document.querySelector('.abs');
abs.addEventListener('click', openabsOverlay);

function openforeOverlay() {
  var overlay = document.getElementById('foreOverlay');
  overlay.style.display = 'flex';
}

function closeforeOverlay() {
  var overlay = document.getElementById('foreOverlay');
  overlay.style.display = 'none';
}

var fore = document.querySelector('.fore');
fore.addEventListener('click', openforeOverlay);

function openquadsOverlay() {
  var overlay = document.getElementById('quadsOverlay');
  overlay.style.display = 'flex';
}

function closequadsOverlay() {
  var overlay = document.getElementById('quadsOverlay');
  overlay.style.display = 'none';
}

var quads = document.querySelector('.quads');
quads.addEventListener('click', openquadsOverlay);

function opentrapsOverlay() {
  var overlay = document.getElementById('trapsOverlay');
  overlay.style.display = 'flex';
}

function closetrapsOverlay() {
  var overlay = document.getElementById('trapsOverlay');
  overlay.style.display = 'none';
}

var traps = document.querySelector('.traps');
traps.addEventListener('click', opentrapsOverlay);

function opentriOverlay() {
  var overlay = document.getElementById('triOverlay');
  overlay.style.display = 'flex';
}

function closetriOverlay() {
  var overlay = document.getElementById('triOverlay');
  overlay.style.display = 'none';
}

var tri = document.querySelector('.tri');
tri.addEventListener('click', opentriOverlay);

function openlatsOverlay() {
  var overlay = document.getElementById('latsOverlay');
  overlay.style.display = 'flex';
}

function closelatsOverlay() {
  var overlay = document.getElementById('latsOverlay');
  overlay.style.display = 'none';
}

var lats = document.querySelector('.lats');
lats.addEventListener('click', openlatsOverlay);

function opengluteOverlay() {
  var overlay = document.getElementById('gluteOverlay');
  overlay.style.display = 'flex';
}

function closegluteOverlay() {
  var overlay = document.getElementById('gluteOverlay');
  overlay.style.display = 'none';
}

var glute = document.querySelector('.glute');
glute.addEventListener('click', opengluteOverlay);

function openhamOverlay() {
  var overlay = document.getElementById('hamOverlay');
  overlay.style.display = 'flex';
}

function closehamOverlay() {
  var overlay = document.getElementById('hamOverlay');
  overlay.style.display = 'none';
}

var ham = document.querySelector('.ham');
ham.addEventListener('click', openhamOverlay);

function opencalfOverlay() {
  var overlay = document.getElementById('calfOverlay');
  overlay.style.display = 'flex';
}

function closecalfOverlay() {
  var overlay = document.getElementById('calfOverlay');
  overlay.style.display = 'none';
}

var calf = document.querySelector('.calf');
calf.addEventListener('click', opencalfOverlay);