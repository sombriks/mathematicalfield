function Hud(gameparent) {

	this.hudcontainer = new PIXI.Container();

	gameparent.stage.addChild(this.hudcontainer);

	this.value = "Score: " + gameparent.owned + " / " + gameparent.total;

	var text = new PIXI.Text(this.value, {
		stroke : "green",
		fill : "green",
		font : "22px Arial",
	});
	this.hudcontainer.addChild(text);

	this.step = function() {
		this.value = "Score: " + gameparent.owned + " / " + gameparent.total;
		text.text = this.value;
	};

	this.resize = function(w, h) {
	};
}

module.exports = Hud;