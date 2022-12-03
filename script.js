function setup() {

    var socket = io();

    var side = 30;

    var matrix = [];

    let grassCountElement = document.getElementById('grassCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterEaterCountElement = document.getElementById('grassEaterEaterCount');
    let fireCounterElemrnt = document.getElementById('fireCount');
    let waterCounterElemrnt = document.getElementById('waterCount');


    let seasonChanger = document.getElementById("btnsc");
    let seasonElement = document.getElementById("SeasonLabel");
    let pause = document.getElementById("pause");
    let resume = document.getElementById("resume");

  

    let season = 2;

    let colorSystem = [
        ["white", "orange", "red", "yellow", "cyan"],
        ["green", "orange", "red", "yellow", "blue"],
        ["#348C31", "#f3e77e", "#ee295d", "#f3bccb", "#09C3DB"],
        ["green", "orange", "red", "yellow", "blue"]

    ];

    let Seasons = ["Winter", "Spring", "Summer", "Autumn"]

    seasonChanger.addEventListener("click", ()=>{
        season += 1;
        season %= 4;

        seasonElement.innerText = "Season: " + Seasons[season];
    });


    pause.addEventListener("click", ()=>{
        socket.disconnect();
    });
    resume.addEventListener("click", ()=>{
        socket.connect();
    });


    socket.on("data", drawCreatures);

    function drawCreatures(data) {        
        matrix = data.matrix;
        grassCountElement.innerText = data.grassCounter;
        grassEaterCountElement.innerText = data.grassEaterCounter;  
        grassEaterEaterCountElement.innerText = data.grassEaterEaterCounter;
        fireCounterElemrnt.innerText = data.fireCounter;
        waterCounterElemrnt.innerText = data.waterCounter;
        createCanvas(matrix[0].length * side, matrix.length * side)
        background('#acacac');

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    fill(colorSystem[season][0]);
                } else if (matrix[i][j] == 2) {
                    fill(colorSystem[season][1]);
                } else if (matrix[i][j] == 0) {
                    fill('#684132');
                } else if (matrix[i][j] == 3) {
                    fill(colorSystem[season][3]);
                } else if (matrix[i][j] == 4) {
                    fill(colorSystem[season][4]);
                } else if (matrix[i][j] == 5) {
                    fill(colorSystem[season][3]);
                }
                rect(j * side, i * side, side, side);
            }
        }
    }
}