
var Stage0 = require("stages/stage0.js");
var renderer = require("base/renderer.js");

var st0 = new Stage0();

document.body.appendChild(renderer.view);

function anim() {
  requestAnimationFrame(anim);
  st0.update();
}
anim();

