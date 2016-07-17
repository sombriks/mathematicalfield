var Square = require("./square.js");
var Hud = require("./hud.js");

function GameMap() {

	this.stage = new PIXI.Container();
	this.stage.x=0;
	this.stage.y=0;
	
	// conteineres manipuláveis
	this.map = new PIXI.Container()
	this.map.x = 100;
	this.map.y = 100;
	this.stage.addChild(this.map);
	

	this.hud = new Hud(this);
	
	
	this.gamemap = [ //
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], //
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], //
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], //
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], //
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], //
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], //
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], //
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], //
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ], //
	[ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ] //
	];

	this.makeSquares = function() {
		var i = -1;
		while (++i < this.gamemap.length) {
			var j = -1;
			while (++j < this.gamemap[i].length) {
				this.gamemap[i][j] = new Square(i, j, this.gamemap[i][j], this);
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
				this.gamemap[i][j].step();
			}
		}
	}

	this.resize = function(w, h) {
		var x = w < h ? w : h;
		var s = x / 640;
		
		this.stage.scale.set(s);
	}

}

module.exports = GameMap;