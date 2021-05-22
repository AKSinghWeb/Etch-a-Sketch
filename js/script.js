const div = document.querySelector('.container'); // selects the container of grid divs

const GRIDSIZE = 16; // default grid size
let gridSize = GRIDSIZE;

gridGenerator(gridSize); // generates default grid

const reset = document.querySelector("#resetBtn").addEventListener('click', resetter); // event listener
const size = document.querySelector('#sizeBtn').addEventListener("click", changeSize); // for buttons

// function for generating grid also adding hover effect for each div after every iteration 
function gridGenerator(gridSize) {
    for (let i = 0; i < ((gridSize) ** 2); i++) {
        let newDiv = document.createElement('div');
        newDiv.className = 'gridDiv';
        newDiv.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = `rgb(${random()},${random()},${random()})`; // random color chooser
            e.stopPropagation();
        });
        div.appendChild(newDiv);
    }
    div.style.gridTemplateColumns = `repeat(${gridSize},1fr)`; // formats the grid layout

}

// random no. generator b/w  using the function Math.floor(Math.random() * (max - min + 1)) + min;  
function random() {
    rand = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
    return (rand)
}

// clears the grid
function resetter() {
    let gridItems = document.querySelectorAll('.gridDiv');
    gridItems.forEach((gridDiv) => {
        gridDiv.style.backgroundColor = 'white';
    });
}

// changes the size of grid
function changeSize() {
    let gridItems = document.querySelectorAll('.gridDiv');
    gridItems.forEach((gridDiv) => { // removes the previous grid
        div.removeChild(gridDiv);
    });
    userInput = prompt("Enter a Grid-Size between 1 and 64 :", '16');
    while (!(userInput >= 1 && userInput <= 64)) { // asks for input until user enters b/w 1-64
        userInput = prompt("Invalid input!\nPlease enter between 1 and 64", "16");
    }
    newSize = userInput;
    gridGenerator(newSize); // generates new grid using function gridGenerator
}