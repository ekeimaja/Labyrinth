var Labyrinth = Labyrinth || {};

Labyrinth.menu = function () {
    
};

Labyrinth.menu.prototype = {

create: function(){

	barGreen = game.add.graphics(200,300);
    barGreen.beginFill(0xEAF516);
    barGreen.drawRect(0,0,300,50);

    barYellow = game.add.graphics(200,300);
    barYellow.beginFill(0x4BFAF7);
    barYellow.drawRect(0,0,300,50);
    
    maxWidth = 300;
    barYellow.width=0;
    
    tween = game.add.tween(barYellow);
    tween.to({width:maxWidth},1000);
    tween.start();
    
},
update: function(){
    
}  
};