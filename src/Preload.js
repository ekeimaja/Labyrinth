var Labyrinth = Labyrinth || {};

Labyrinth.preload = function () {
    
};

Labyrinth.preload.prototype = {

preload: function() {
 
     // tilemap json-muodossa
    this.load.tilemap('kentta', 'assets/levels/kentta1.json', null, Phaser.Tilemap.TILED_JSON);
    // tilemapin käyttämä tileset
    this.game.load.image('atlas', 'assets/levels/atlas.png');
    
    this.game.load.image('pelaaja', 'assets/levels/pelaaja.png');
    this.game.load.image('food', 'assets/levels/food.png');
    this.game.load.image('monster', 'assets/levels/monster.png');
    this.game.load.image('maali', 'assets/levels/goal.png');
    this.game.load.image('tausta', 'assets/levels/tausta.png');
    
    this.game.load.audio('game1musa', 'assets/audio/ekamusa.mp3');
    this.game.load.audio('game2musa', 'assets/audio/tokamusa.mp3');
    this.game.load.audio('piste', 'assets/audio/point.wav');
    this.game.load.audio('kuolema', 'assets/audio/death.wav');
 
  },
 
  create: function() {
 
    this.state.start('game1');
 
  }
};