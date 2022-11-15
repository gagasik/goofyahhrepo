var matrix = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],   [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    []
];

var side = 20;


function fillMatrix() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix.length; x++) {
            matrix[y].push(0);
        }
    }


}

function generator(grass, grassEater,fly){
    for (let i = 0; i < grass; i++) {
        x1 = Math.floor(Math.random()*(matrix.length-1));
        y1 = Math.floor(Math.random()*(matrix.length-1));
        matrix[y1][x1] = 1;
    }
    for (let i = 0; i < grassEater; i++) {
        x1 = Math.floor(Math.random()*(matrix.length-1));
        y1 = Math.floor(Math.random()*(matrix.length-1));
        matrix[y1][x1] = 2;
    }
    for (let i = 0; i < fly; i++) {
        x1 = Math.floor(Math.random()*(matrix.length-1));
        y1 = Math.floor(Math.random()*(matrix.length-1));
        matrix[y1][x1] = 3;
    }
}


fillMatrix();
generator(20,2,20);

const grassArr = [];
const grassEaterArr = [];
const flyArr =[];



function setup() {
    frameRate(10)
    createCanvas(side * matrix[0].length, side * matrix.length)
    background("#acacac")
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                grassArr.push(new Grass(x, y))
            } else if (matrix[y][x] == 2) {
                grassEaterArr.push(new GrassEater(x, y))
            } else if (matrix[y][x] == 3) {
                grassEaterArr.push(new Fly(x, y))
            }
            
        }
    }
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        
        for (let x = 0; x < matrix[y].length; x++) {

            if(matrix[y][x] == 0)
            {
                fill("#684132")
            }
            else if(matrix[y][x] == 1)
            {
                fill("#348C31")
            }
            else if(matrix[y][x] == 2)
            {
                fill("#f3e77e")
            }
            else if(matrix[y][x] == 3)
            {
                fill("#f3bccb")
            }
            else if(matrix[y][x] == 4)
            {
                fill("#A19862")
            }
            rect(x * side , y * side , side,side )

        }

    }
    for (let i in grassArr) {
        grassArr[i].mul();
   
    }
    for(var i in grassEaterArr){
        grassEaterArr[i].eat();
    }
    for(var i in flyArr){
        flyArr[i].eat();
    }

}

