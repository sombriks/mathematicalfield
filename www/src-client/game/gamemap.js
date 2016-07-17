var Square = require("./square.js");
var Hud = require("./hud.js");

function GameMap(gamemap) {

	this.stage = new PIXI.Container();
	this.stage.x = 0;
	this.stage.y = 0;

	// conteineres manipuláveis
	this.map = new PIXI.Container()
	this.map.x = 50;
	this.map.y = 50;
	this.stage.addChild(this.map);

	this.hud = new Hud(this);

	this.gamemap = gamemap || [ //
	[ 1, 1, 1, 0, 1 ], //
	[ 1, 1, 1, 0, 1 ], //
	[ 1, 1, 1, 1, 1 ], //
	[ 1, 0, 1, 1, 1 ], //
	[ 1, 0, 1, 1, 1 ] //
	];

	this.makeSquares = function() {
		var i = -1;
		while (++i < this.gamemap.length) {
			var j = -1;
			while (++j < this.gamemap[i].length) {
				if (this.gamemap[i][j]) {
					this.gamemap[i][j] = Math.floor(Math.random() * 10);
					this.gamemap[i][j] = new Square(i, j, this.gamemap[i][j], this);
				}
			}
		}
	};

	this.makeSquares()

	this.step = function() {
		this.hud.step();
		var i = this.gamemap.length;
		while (i-- > 0) {
			var j = this.gamemap[i].length;
			while (j-- > 0) {
				if (this.gamemap[i][j] && this.gamemap[i][j]) {
					this.gamemap[i][j].step();
				}
			}
		}
	}

	this.resize = function(w, h) {
		var x = w < h ? w : h;
		var s = x / 320;

		this.stage.scale.set(s);
	}

	this.givePlayer = function(x, y) {
		var square = this.gamemap[x][y];
		if (square) {
			square.value = 9;
			square.paintGreen();
		}
	}

	this.paintNear = function(x, y) {

		var up = this.gamemap[x] && this.gamemap[x][y - 1];
		var down = this.gamemap[x] && this.gamemap[x][y + 1];
		var left = this.gamemap[x - 1] && this.gamemap[x - 1][y];
		var right = this.gamemap[x + 1] && this.gamemap[x + 1][y];

		var l = [ up, down, left, right ];
		var i = l.length;
		while (i--)
			if (l[i])
				l[i].paintWhite();
	};

	this.nearAmmo = function(x, y) {

		var up = this.gamemap[x] && this.gamemap[x][y - 1];
		var down = this.gamemap[x] && this.gamemap[x][y + 1];
		var left = this.gamemap[x - 1] && this.gamemap[x - 1][y];
		var right = this.gamemap[x + 1] && this.gamemap[x + 1][y];

		var l = [ up, down, left, right ];
		l = l.sort(function(a, b) {
			if (a && b)
				return b.value - a.value; // always take from the weakest one
			else if (a)
				return 1;
			else if (b)
				return -1;
		})
		var i = l.length;
		while (i--) {
			if (l[i] && l[i].playerid && l[i].value > 0) {
				l[i].valueDown();
				return 1;
			}
		}
		return 0;
	};
}

module.exports = GameMap;