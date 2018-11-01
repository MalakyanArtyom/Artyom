var matrix = [
    [3, 0, 1, 0, 2],
    [1, 0, 0, 0, 5],
    [0, 1, 0, 0, 2],
    [0, 0, 1, 0, 0],
    [1, 1, 0, 0, 4],
    [1, 1, 0, 0, 0],
    [1, 1, 0, 0, 0]
]; 

/* var matrix = []
n = 10;
m = 10; */


var side = 120;
var grassArr = [];
var grassEatArr = [];
var predatorArr = [];
var humanArr = [];
var infPredatorArr = [];
var bugArr = [];

function setup() {
    /* for(var y = 0; y < n; y++){
        matrix[y] = [];
        for(var x = 0; x < m; x++){
            matrix[y][x] = random([0,1])
        }
    }
    console.log(matrix);

    for(var y = 0; y < 2; y++){
        for(var x = 0; x < 2; x++){
            matrix[y][x] = 4;
        }
    } */
    

    frameRate(1);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y, 1));

            }
            else if (matrix[y][x] == 2) {
                grassEatArr.push(new GrassEater(x, y, 2));
            }
            else if (matrix[y][x] == 3) {
                predatorArr.push(new Predator(x, y, 3));
            }
            else if (matrix[y][x] == 4) {
                humanArr.push(new Human(x, y, 4));
            }
            else if (matrix[y][x] == 5) {
                bugArr.push(new Bug(x, y, 5));
            }
            else if (matrix[y][x] == 6) {
                infPredatorArr.push(new infectedPredator(x, y, 6));
            } 
        }
    }


}


function draw() {

    for(var i in infPredatorArr)
        infPredatorArr[i].eat();

    for (var i in bugArr)
        bugArr[i].infect();

    for (var i in humanArr)
        humanArr[i].eat();

    for (var i in predatorArr)
        predatorArr[i].eat();

    for (var i in grassEatArr)
        grassEatArr[i].eat();


    for (var i in grassArr)
        grassArr[i].mul();



    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);

            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill(139, 69, 19);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill(255, 220, 177);
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill('black');
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 6) {
                fill('red');
                rect(x * side, y * side, side, side);
            }
        }
    }
}
