var Labyrinth = Labyrinth || {};

Labyrinth.game = new Phaser.Game(640,640, Phaser.AUTO, 'Labyrinth');
Labyrinth.game.state.add('preload', Labyrinth.preload); //tänne KAIKKI assetit, jotta ei tarvitse kutsua joka statessa erikseen.
Labyrinth.game.state.add('menu', Labyrinth.menu);  //menu
//Labyrinth.game.state.add('level-master', Labyrinth.level_master); //hallitaan pelaajan statseja läpi pelin(kuolemat, score ym.)ja pitää huolta checkpointista.
Labyrinth.game.state.add('game1', Labyrinth.game1);
//Labyrinth.game.state.add('game2', Labyrinth.game2);

Labyrinth.game.state.start('preload');