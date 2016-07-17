var Square = require("./square.js");

function GameMap(stage) {

	this.stage = new PIXI.Container();
	this.stage.x=200;
	this.stage.y=200;
	
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
		var i = this.gamemap.length;
		while (i-- > 0) {
			var j = this.gamemap[i].length;
			while (j-- > 0) {
				this.gamemap[i][j].step();
			}
		}
	}
	
	this.resize=function(w,h){
		var x = ( w - 320 ) / 2;
		var y = ( h - 320 ) / 2;
		this.stage.x=x;
		this.stage.y=y;
	}

}

module.exports = GameMap;