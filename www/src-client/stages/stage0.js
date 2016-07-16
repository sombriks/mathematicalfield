
var renderer = require("../base/renderer.js");

function Stage0() {

  var stage0 = new PIXI.Container();

  var bunny = null;

  // load the texture we need
  PIXI.loader.add('bunny', 'assets/bunny.png').load(function (loader, resources) {
    // This creates a texture from a 'bunny.png' image.
    bunny = new PIXI.Sprite(resources.bunny.texture);

    // Setup the position and scale of the bunny
    bunny.position.x = 100;
    bunny.position.y = 100;

    bunny.anchor.x=0.5;
    bunny.anchor.y=0.5;
    

    bunny.scale.x = 2;
    bunny.scale.y = 2;

    // Add the bunny to the scene we are building.
    stage0.addChild(bunny);

  });

  this.update = function () {
    if(bunny)
      bunny.rotation += 0.1;
    renderer.render(stage0);
  }

}

module.exports = Stage0;
