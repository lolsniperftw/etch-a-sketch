const COLOR_BLACK = 'black';

let color;

//get the grid container
const grid = document.querySelector('.grid-container');
//get the create grid button
const createGridButton = document.querySelector('#create-grid');
//get the color picker
const colorPicker = document.querySelector('#color-picker');

// setting the color to be black at the beginning
setColor(COLOR_BLACK);

function createGrid(gridSize) {
    grid.innerHTML = ''; // destroys the grid
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

    for (let i = 0; i < gridSize ** 2; i++) {
        
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = getColor();
        })
        grid.appendChild(cell);
    }
}

function getColor() {
    return color;
}

function setColor(newColor) {
    color = newColor;
    return color;
}

//add event listener to the create grid button
createGridButton.addEventListener('click', () => {
    let gridSize = parseInt(prompt("Enter a grid size:"));
    // change the grid only if the user input a number
    if (gridSize) {
        createGrid(gridSize);
    }
})

//event listener for color picker
colorPicker.addEventListener('input', (event) => {
    setColor(event.target.value);
})

createGrid(16);