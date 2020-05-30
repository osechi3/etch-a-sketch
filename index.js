
function createElement() {
    const gridContainer = document.querySelector('#grid-container');
    const gridElement = document.createElement('div');
    gridElement.classList.add('blank-grid-elements');
    gridElement.classList.add('grid-elements-size');
    gridContainer.appendChild(gridElement);
}

for (i = 0; i < 256; i++) {
    createElement();
}

const resetButton = document.querySelector('#reset-button');
resetButton.addEventListener('click', resetGrid);

function resetGrid() {
    let usedElementClass = document.querySelectorAll('.used-grid-elements');
    usedElementClass.forEach((element) => {
        element.classList.remove('used-grid-elements');
        element.classList.add('blank-grid-elements');
        element.style.backgroundColor = ''; 
    });
}

const newGridButton = document.querySelector('#change-grid-size-button');
newGridButton.addEventListener('click', createNewGrid);

function createNewGrid() {
    let userGridSize = prompt('Choose Grid Size');
    let userElementsAmount = Number(userGridSize)**2;
    const gridContainer = document.querySelector('#grid-container');
    let gridContainerStyle = getComputedStyle(gridContainer);
    let containerSize = Number(gridContainerStyle.height.replace('px', ''));
    let elementSize = containerSize / Number(userGridSize) + 'px';

    // Deleting the old Grid
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.lastChild);
    }

    // Creating a new Grid
    for (i = 0; i < userElementsAmount; i++) {
        const gridElement = document.createElement('div');
        gridElement.classList.add('blank-grid-elements');
        gridElement.classList.add('grid-elements-size');
        gridContainer.appendChild(gridElement);
    }
    // Setting the size of new elements
    const elementsSizeClass = document.querySelectorAll('.grid-elements-size')
    elementsSizeClass.forEach((element) => {
        element.style.height = elementSize;
        element.style.width = elementSize;
    });
    gridContainer.style.width = '481px';  // Otherwise elements don't fit in
    paintElementDefault();
    
}
const defaultColorButton = document.querySelector('#default-color-button');
defaultColorButton.addEventListener('click', paintElementDefault);

function paintElementDefault() {
const blankElementClass = document.querySelectorAll('.blank-grid-elements');
blankElementClass.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        element.classList.remove('blank-grid-elements');
        element.classList.add('used-grid-elements');
        let usedGridElementsClass = document.querySelector('.used-grid-elements');
        element.style.backgroundColor = '';
    });
});
const usedElementClass = document.querySelectorAll('.used-grid-elements');
usedElementClass.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        element.style.backgroundColor = '';
    });
});
}

const rainbowColorButton = document.querySelector('#rainbow-color-button');
rainbowColorButton.addEventListener('click', paintElementRainbow);

function paintElementRainbow() {
    const blankElementClass = document.querySelectorAll('.blank-grid-elements');
    blankElementClass.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.classList.remove('blank-grid-elements');
            element.classList.add('used-grid-elements');
            element.style.backgroundColor = getRainbowColor();
        });
    });
    const usedElementClass = document.querySelectorAll('.used-grid-elements');
    usedElementClass.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            element.classList.remove('blank-grid-elements');
            element.classList.add('used-grid-elements');
            element.style.backgroundColor = getRainbowColor();
        });
    });
}
function getRainbowColor() {
    let num1 = Math.floor(Math.random() * 255);
    let num2 = Math.floor(Math.random() * 255);
    let num3 = Math.floor(Math.random() * 255);
    return `rgb(${num1}, ${num2}, ${num3})`;
}

const eraserButton = document.querySelector('#eraser-button');
eraserButton.addEventListener('click', eraseElement);

function eraseElement() {
const usedGridElementsClass = document.querySelectorAll('.used-grid-elements');
usedGridElementsClass.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('blank-grid-elements');
        element.classList.remove('used-grid-elements');
        element.style.backgroundColor = '';
    });
});
const blankGridElementsClass = document.querySelectorAll('.blank-grid-elements');
blankGridElementsClass.forEach((element) => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('blank-grid-elements');
        element.classList.remove('used-grid-elements');
        element.style.backgroundColor = '';
    });
});
}

paintElementDefault();
