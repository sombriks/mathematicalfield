var renderer = new PIXI.WebGLRenderer(320, 240,{transparent:true});

function resize(){
  var width  = document.body.clientWidth;
  var height = document.body.clientHeight;
  renderer.resize(width,height);   
}

window.addEventListener("DOMContentLoaded",resize);
window.addEventListener("resize",resize);

module.exports = renderer;