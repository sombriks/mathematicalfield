function Square(x, y, value, gamemap) {

	this.value = value;

	var text = new PIXI.Text(this.value, {
		fill : 'black',
		stroke : 'black',
	});
	text.anchor.x = 0.5;
	text.anchor.y = 0.5;
	text.x = 48 * x;
	text.y = 48 * y;
	gamemap.map.addChild(text);

	var sprite = new PIXI.Sprite.fromImage('assets/square.png');
	sprite.anchor.x = 0.5;
	sprite.anchor.y = 0.5;
	sprite.x = 48 * x;
	sprite.y = 48 * y;
	sprite.interactive = true;

	this.inputup = function() {
		console.debug(this);
		// not the player bit is near
		if (!this.playerid && this.nearplayer) {
			var canattack = gamemap.nearAmmo(x, y);
			if (canattack)
				this.valueDown();
			if (this.value == -1) {
				this.value = 0;
				this.paintGreen();
			}
		} else if (this.value < 9 && this.playerid) {
			var canattack = gamemap.nearAmmo(x, y);
			if (canattack)
				this.valueUp();
		}
	};

	sprite.on("touchend", this.inputup, this);
	sprite.on("mouseup", this.inputup, this);

	gamemap.map.addChild(sprite);

	this.playerid = false;
	this.nearplayer = false;

	this.tstamp = new Date().getTime();

	this.step = function() {
		if (this.playerid) {
			text.style.fill = "green";
			text.style.stroke = "green";
			gamemap.paintNear(x, y);
		}
		var t2 = new Date().getTime();
		if (t2 - this.tstamp > 5000) {// each 5 seconds

			if (this.value < 9 && this.playerid) {
				this.valueUp();
			}
			this.tstamp = new Date().getTime();
		}
	};

	this.valueDown = function() {
		this.value--;
		text.text = this.value;
	};

	this.valueUp = function() {
		this.value++;
		text.text = this.value;
	}

	this.paintWhite = function() {
		if (!this.playerid) { // won't paint myself
			text.style.fill = "white";
			text.style.stroke = "white";
			text.text = "?";// force repaint
			text.text = this.value;
			this.nearplayer = true;
		}
	};

	this.paintGreen = function() {
		text.style.fill = "green";
		text.style.stroke = "green";
		text.text = "?";// force repaint
		text.text = this.value;
		this.playerid = true;
	};
}

module.exports = Square;
//