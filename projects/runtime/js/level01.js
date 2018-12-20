var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:400,y:groundY},
                {type: 'sawblade',x:600,y:groundY},
                {type: 'sawblade',x:900,y:groundY}
            ]
        };
        
        
        
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(false);

        // BEGIN EDITING YOUR CODE HERE
        var enemy =  game.createGameItem('enemy',25);
        var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
        var hitZoneSize = 25;
        var damageFromObstacle = 10;
            
        function createSawBlade(x,y) {
            console.log('Saw blade function!');
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
        }      
        
        createSawBlade(500, 300);
        createSawBlade(200, 200);
        createSawBlade(100, 100);
        createSawBlade(400, 600);
        createSawBlade(300, 100);
        
    
    // var enemy = game.createGameItem('enemy' ,25);
    // var redSquare = draw.rect(50,50, 'green');
    // redSquare.x = -25;
    // redSquare.x = -25;
    // enemy.addChild(redSquare);
    // enemy.x = 400;
    // enemy.y = groundY-50;
    // game.addGameItem(enemy);
    // enemy.velocityX = -1; 
    // enemy.onPlayerCollision = function(){
    //     console.log('the enemy has hit halle');
    //     game.changeIntegrity(-10)
    //     enemy.fadeOut();
    // }
    function createEnemy(x, y) {
        console.log('making an enemy!!!');
        var enemy = game.createGameItem('enemy' ,25);
        var redSquare = draw.rect(50,50, 'green');
        redSquare.x = -25;
        redSquare.x = -25;
        enemy.addChild(redSquare);
        enemy.x = x;
        enemy.y = y;
        game.addGameItem(enemy);
        enemy.velocityX = -1; 
        enemy.onPlayerCollision = function(){
            console.log('the enemy has hit halle');
            game.changeIntegrity(-10);
            enemy.fadeOut(); 
        };
        enemy.onProjectileCollision = function() {
            enemy.fadeOut();
            game.increaseScore (300)
        }
    }
   createEnemy(400,groundY-80);
   createEnemy(200, groundY-10);
   createEnemy(500, groundY-50);
   
   function tnt(x,y) {
            console.log('Saw blade function!');
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwi7jZX7lq3fAhXmmuAKHd-PAPsQjRx6BAgBEAU&url=http%3A%2F%2Fwww.firstpresrf.org%2Fyouth_ministries%2Farticle329432.htm%3Fbody%3D1&psig=AOvVaw2OLPzFp0ZcZlKGPrFv2pEO&ust=1545353074073397');
            myObstacle.addChild(obstacleImage);
        } 
    tnt(500, groundY-90);    
   
   function createReward(x, y) {
        console.log('making a reward!!!');
        var reward = game.createGameItem('reward' ,25);
        var redSquare = draw.rect(50,50, 'red');
        redSquare.x = -25;
        redSquare.x = -25;
        reward.addChild(redSquare);
        reward.x = x;
        reward.y = y;
        game.addGameItem(reward);
        reward.velocityX = -1; 
        reward.onPlayerCollision = function(){
            console.log('halle got the reward ');
            game.changeIntegrity(-10);
            reward.fadeOut(); 
        };
    }
    createReward(600, groundY-150);
};
        
    
        
    
    
};


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}