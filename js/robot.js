let robot;


$(document).ready(function(){



  const createBoard = function(){
    // create a new jquery tbale element and append to the body
    let $board = $('<table></table>');
    $('body').append($board)
    // build out htis table by looping

    for (let i = 0; i < 9; i++) {
      let $row = $('<tr></tr>');
      $('table').append($row);

      //loop again and create  td's
      for (let j = 0; j < 9; j++) {
        $square = $('<td></td>');
        $row.append($square)
      }//j loop
    } // i loop
  } // create board

const directions = ["up", "right", "down", "left"]

//robot constructing!

const Robot = function() {
  //initial direction and position
  let x = 0;
  let y = 0;
  let dir = "up";


  let $bot = $('<div></div>');
  $bot.addClass(`robot ${dir}`);
  $('body').append($bot);


  const moveRobot = function() {
    $bot.css("top", (window.innerHeight /2 + y * 40 -20) + "px" )
    $bot.css("left", (window.innerWidth /2 + x * 40 -20) + "px" )
  } // move

  moveRobot();

  var turn  = function(direction) {
      //remove current "facing class"
      $('.robot').removeClass('up down left right')
      //if direction passed do the appropriate things
      if (direction === "left") {
        if( directions.indexOf(dir) > 0) {
          dir = directions[directions.indexOf(dir)-1]
        } else {
          dir = directions[3]
        }
      } else {
        if(directions.indexOf(dir) < 3) {
          dir = directions[directions.indexOf(dir) + 1]
        } else {
          dir = directions[0]
        }
      } //if
      $('.robot').addClass(dir)
    };

    const advance = function( step ) {
      step = step || 1;

      if( dir === "up") {
        y = y - step;
      } else if ( dir === "down") {
        y = y + step;
      } else if (dir === "left") {
        x = x - step;
      } else if (dir === "right") {
        x = x + step
      }
      moveRobot()
    }
     // advance
  return {
    advance: advance,
    left: function(){
      turn('left');
    },
    right: function(){
      turn('right')
    },
  };
}; //robot

createBoard();
robot= new Robot()
}) // docready


$(document).keyup(function(e){

  if (e.keyCode == 38) {
    robot.advance(1) //up
  } else if (e.keyCode == 37) {
    robot.left() //left
  } else if (e.keyCode == 39) {
    robot.right()  //right
  } else if (e.keyCode == 40) {
    robot.advance(-1)  //down
  }
})
