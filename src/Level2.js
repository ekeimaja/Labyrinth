
/*
 
BasicGame = {
 
 
};
 
BasicGame.Game = function (game) {
 

};
 
BasicGame.Game.prototype = Object.create(Phaser.State.prototype);
BasicGame.Game.prototype.constructor = BasicGame.Game;
 
 
BasicGame.Game.prototype.preload = function() {

        
    // tilemap json-muodossa
    this.game.load.tilemap('kentta', 'assets/levels/kentta2.json', null, Phaser.Tilemap.TILED_JSON);
    // tilemapin käyttämä tileset
    this.game.load.image('atlas', 'assets/atlas.png');
    this.game.load.image('pelaaja', 'assets/pelaaja.png');
    this.game.load.image('food', 'assets/food.png');
    this.game.load.image('monster', 'assets/pelaaja.png');
         
 
},
 
BasicGame.Game.prototype.create = function() {
    
    this.cursors = this.game.input.keyboard.createCursorKeys();
    this.physics.startSystem(Phaser.Physics.ARCADE);
 
 
// <editor-fold defaultstate="collapsed" desc=" KENTÄN LATAUS ">
            //alustetaan kartta-objekti ja liitetään tileset siihen
            this.map = this.game.add.tilemap('kentta');
            this.map.addTilesetImage('atlas');
            
            //luodaan kartan tasot (mikäli tasoa ei luoda, sitä ei näytetä)
            this.layer1 = this.map.createLayer('seinat');
            
            coll = this.map.createLayer('collision');
            
            this.layer1.resizeWorld();
            // (tilen ID+1, törmääkö vai ei, layerin nimi
            this.map.setCollision(7, true, coll);
            
// </editor-fold>

// <editor-fold defaultstate="collapsed" desc=" PISTEET ">
            this.points = this.game.add.group();
            this.points.enableBody = true;
            
            this.map.createFromObjects('Object Layer 1', 5, 'food', 0, true, false, this.points);
            
// </editor-fold>
    
// <editor-fold defaultstate="collapsed" desc=" PELAAJA ">
            this.pelaaja = this.game.add.sprite(35, 35, 'pelaaja');
            this.game.physics.enable(this.pelaaja);
            this.pelaaja.body.width = 29;
            this.pelaaja.body.height = 29;
            
// </editor-fold>

// <editor-fold defaultstate="collapsed" desc=" MONSTERI ">
            this.monsters = this.game.add.group();
            this.monsters.enableBody = true;
            
            this.map.createFromObjects('Object Layer 2', 3, 'monster', 0, true, false, this.monsters);
            
// </editor-fold>
    
},
 
BasicGame.Game.prototype.update = function() {
    
// <editor-fold defaultstate="collapsed" desc=" COLLISIONIT ">
            this.game.physics.arcade.collide(this.pelaaja, coll);
            this.game.physics.arcade.overlap(this.pelaaja, this.points, collectFood, null, this);
            this.game.physics.arcade.overlap(this.pelaaja, this.monsters, collideMonster, null, this);
            
// </editor-fold>
    


// <editor-fold defaultstate="collapsed" desc=" LIIKKUMINEN ">

            if (this.cursors.left.isDown) {
                this.pelaaja.body.velocity.x = -300;
            }
            else if (this.cursors.right.isDown) {
                this.pelaaja.body.velocity.x = 300;
            }
            else if (this.cursors.down.isDown) {
                this.pelaaja.body.velocity.y = 300;
            }
            else if (this.cursors.up.isDown) {
                this.pelaaja.body.velocity.y = -300;
            }
            
// </editor-fold>

},

collectFood = function(pelaaja, food) {

    food.kill();
},
        
collideMonster = function(pelaaja, monster) {

    pelaaja.kill();

};

*/