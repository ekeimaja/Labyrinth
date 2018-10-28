var Labyrinth = Labyrinth || {};

Labyrinth.game1 = function () {
    
};

Labyrinth.game1.prototype = {

create: function(){
    
            this.cursors = this.game.input.keyboard.createCursorKeys();
            this.physics.startSystem(Phaser.Physics.ARCADE);

            this.musa = this.game.add.audio('game1musa');
            this.piste = this.game.add.audio('piste');
            this.kuolema = this.game.add.audio('kuolema');
            //this.musa.play();
            this.musa.volume = 0.5;
            this.musa.loop = true;

// <editor-fold defaultstate="collapsed" desc=" KENTÄN LATAUS ">
            //alustetaan kartta-objekti ja liitetään tileset siihen
            this.map = this.game.add.tilemap('kentta');
            this.map.addTilesetImage('atlas');

            this.game.add.tileSprite(0, 0, this.game.width, this.game.height, 'tausta');
            
            //luodaan kartan tasot (mikäli tasoa ei luoda, sitä ei näytetä)
            this.layer1 = this.map.createLayer('seinat');
            this.layer2 = this.map.createLayer('food');
            this.layer3 = this.map.createLayer('monsters');
            this.layer4 = this.map.createLayer('maali');
            coll = this.map.createLayer('collision');

            this.layer1.resizeWorld();
            // (tilen ID+1, törmääkö vai ei, layerin nimi
            this.map.setCollision(7, true, coll);

// </editor-fold>

// <editor-fold defaultstate="collapsed" desc=" PISTEET ">
            this.points = this.game.add.group();
            this.points.enableBody = true;

            this.map.createFromObjects('food', 5, 'food', 0, true, false, this.points);

// </editor-fold>

// <editor-fold defaultstate="collapsed" desc=" PELAAJA ">
            this.pelaaja = this.game.add.sprite(35, 35, 'pelaaja');
            this.game.physics.enable(this.pelaaja);
            this.pelaaja.body.width = 29;
            this.pelaaja.body.height = 29;

// </editor-fold>

// <editor-fold defaultstate="collapsed" desc=" MONSTERI ">
            this.Vmonsters = this.game.add.group();
            this.Vmonsters.enableBody = true;
            this.map.createFromObjects('Vmonsters', 3, 'monster', 0, true, false, this.Vmonsters);
            

// </editor-fold>

this.map.createFromObjects('maali', 4, 'maali', 0, true, false, this.maali);


    
},
update: function(){
   
    // <editor-fold defaultstate="collapsed" desc=" COLLISIONIT ">
            this.game.physics.arcade.collide(this.pelaaja, coll);
            //this.game.physics.arcade.collide(this.monsters, coll);
            this.game.physics.arcade.overlap(this.pelaaja, this.points, this.collectFood, null, this);
            this.game.physics.arcade.overlap(this.pelaaja, this.Vmonsters, this.collideMonster, null, this);
            this.game.physics.arcade.overlap(this.pelaaja, this.maali, this.changeLevel, null, this);
            this.game.physics.arcade.overlap(this.monster, this.layer1, this.changeDir, null, this);
            
            

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
        collectFood: function (pelaaja, food) {
            this.piste.play();
            food.kill();
        },
        collideMonster: function (pelaaja, monster) {
            this.kuolema.play();
            pelaaja.kill();
            this.musa.stop();
            this.state.restart();
        },
        changeLevel: function (pelaaja, maali){
            
        },
        changeDir: function(enemy){
            enemy.scale.x *= -1;
        }
};
