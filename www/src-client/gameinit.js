var GameMap = require("game/gamemap.js");

var renderer = new PIXI.WebGLRenderer(480, 480, {
	transparent : true
});
document.body.appendChild(renderer.view);

var gm = new GameMap();

gm.givePlayer(2, 2);// começamos com uma casa

function resize() {
	var width = document.body.clientWidth;
	var height = document.body.clientHeight;
	var x = width;
	if (width > height)
		x = height;
	renderer.resize(x, x);
	gm.resize(width, height);
}

window.addEventListener("DOMContentLoaded", resize);
window.addEventListener("resize", resize);
resize();

function anim() {
	if (gm.step()) {
		requestAnimationFrame(anim);
		renderer.render(gm.stage);
	}
}
anim();
