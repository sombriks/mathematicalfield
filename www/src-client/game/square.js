function Square(x, y, value, gamemap) {

	var text = new PIXI.Text("" + value, {
		fill : "white"
	});
	text.anchor.x = 0.5;
	text.anchor.y = 0.5;
	text.x = 32 * x;
	text.y = 32 * y;
	gamemap.stage.addChild(text);

	var sprite = new PIXI.Sprite.fromImage('assets/square.png');
	sprite.anchor.x = 0.5;
	sprite.anchor.y = 0.5;
	sprite.x = 32 * x;
	sprite.y = 32 * y;
	sprite.interactive = true;
	
	this.inputup = function(){
		value++;
		text.text=value;
	};
	
	sprite.on("touchend",this.inputup);
	sprite.on("mouseup",this.inputup);

	gamemap.stage.addChild(sprite);

	this.step = function() {

	};

}

module.exports = Square;