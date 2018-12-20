var init = function (window) {
    'use strict';
    var 
        draw = window.opspark.draw,
        physikz = window.opspark.racket.physikz,
        
        app = window.opspark.makeApp(),
        canvas = app.canvas, 
        view = app.view,
        fps = draw.fps('#000');
        
    
    window.opspark.makeRunner = function() {
        
        window.opspark.runner = {};
        var runner = window.opspark.runner;
        
        ////////////////////////////////////////////////////////////////
        // ALL CODE GOES BELOW HERE                                   //
        ////////////////////////////////////////////////////////////////
        
        // TODO 1 : Declare and initialize our variables //
        var circle;
        var circles = [];
    
        // TODO 2 : Create a function that draws a circle  //
        var drawCircle = function() {
            circle = draw .randomCircleInArea(canvas, true, true, '#999', 2);
            physikz.addRandomVelocity(circle, canvas);
            view.addChild(circle);
            circles.push(circle);
        };
        
        

        // TODO 3 : Call the drawCircle function 5 times //
            drawCircle();
            drawCircle();
            drawCircle();
            drawCircle();
            drawCircle();
            drawCircle();

        // TODO 7 : Create a Loop to call drawCircle 100 times


        for (var counter = 0; counter < 150; counter++) {
            drawCircle();
        }
    
        view.addChild(fps);
        app.addUpdateable(fps);
    
        runner.checkCircleBounds = function(circle) {
            // TODO 5 : YOUR CODE STARTS HERE //////////////////////
            
            // if the circle has gone out the right side of the screen then place it off-screen left
            if ( circle.x > canvas.width + circle.radius ) {
                circle.x = 0 - circle.radius;
            } 
            // TODO 5a) if the circle has gone out of the left side of the screen then place it off-screen right
            else if (circle.x < 0 - circle.radius) { // FIXME: Remember, your conditions should replace the "Fill me in!" comment
                    circle.x = canvas.width + circle.radius;
                
            } 

            // TODO 5b) if the circle has gone out of the top side of the screen then place it off-screen bottom
            else if (circle.y < 0 - circle.radius) {
                // REMEMBER: The top of the screen is 0! Check up and down position with circle.y!
                    circle.y = canvas.height + circle.radius;
            }
            
            // TODO 5c) if the circle has gone out of the bottom side of the screen then place it off-screen top 
            else if (circle.y > canvas.height + circle.radius) { // REMEMBER: The bottom of the screen is canvas.width!
                circle.y = 0 - circle.radius;
            }
            
            // YOUR TODO 5 CODE ENDS HERE //////////////////////////
        };
    
        var update = function() {
            // TODO 4 : Update the circle's position //
            physikz.updatePosition(circles[0]);
            physikz.updatePosition(circles[1]); 
            physikz.updatePosition(circles[2]);
            physikz.updatePosition(circles[3]);
            physikz.updatePosition(circles[4]);
            physikz.updatePosition(circles[5]);
            // TODO 6 : Call checkCircleBounds on your circles.
           

            // TODO 8 : Iterate over the array
           for(var i = 0; i < circles.length; i++){
               var circle = circles[i];
               physikz.updatePosition(circle);
               runner.checkCircleBounds(circle);
           }

        };
        
        ////////////////////////////////////////////////////////////////////
        // NO CODE BELOW HERE                                             //
        ////////////////////////////////////////////////////////////////////
        
        runner.circle = circle;
        runner.circles = circles;
        runner.drawCircle = drawCircle;
        runner.update = update;
        
        app.addUpdateable(window.opspark.runner);
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = init;
}
