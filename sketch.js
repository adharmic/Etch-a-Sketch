const DEFAULT_LENGTH = 16;
let side_length = DEFAULT_LENGTH;

const SKETCH_CONTAINER = document.querySelector('#sketch-container');
SKETCH_CONTAINER.style.backgroundColor = `gray`;
const SIZE_TEXT = document.querySelector('#size-text');

const GRID_INFO = document.querySelector('#grid-info');

const CLEAR_BUTTON = document.querySelector('#clear-grid');
CLEAR_BUTTON.addEventListener("click", function() {
    renderGrid();
});

function isNumeric(str) {
    if (typeof str != "string") {
        return false;
    }
    return !isNaN(str) && !isNaN(parseFloat(str));
}

const SIZE_BUTTON = document.querySelector('#submit-size');
SIZE_BUTTON.addEventListener("click", function() {
    let sizeText = SIZE_TEXT.value;
    if (!isNumeric(sizeText) || Number(sizeText < 1) || Number(sizeText > 80)) {
        // Invalid input
        GRID_INFO.style.color = "red";
        GRID_INFO.textContent = "Invalid size input. Please keep values between 1 and 80.";
        console.log("Invalid!");
        return;
    } 
    side_length = Math.floor(Number(sizeText));
    renderGrid();
});

function clearGrid() {
    while (SKETCH_CONTAINER.firstChild) {
        SKETCH_CONTAINER.removeChild(SKETCH_CONTAINER.firstChild);
    }
}

function renderGrid(num_sides = side_length) {
    clearGrid();

    for (let index = 0; index < num_sides ** 2; index++) {

        let GRID_ELEMENT = document.createElement("div");
        GRID_ELEMENT.addEventListener("mouseover", function(e) {
            this.style.backgroundColor = "black";
        });
        GRID_ELEMENT.style.width = `${Math.floor(SKETCH_CONTAINER.clientWidth / num_sides)}px`;
        GRID_ELEMENT.style.height = `${Math.floor(SKETCH_CONTAINER.clientHeight / num_sides)}px`;
        SKETCH_CONTAINER.appendChild(GRID_ELEMENT);
    }
    GRID_INFO.style.color = "black";
    GRID_INFO.textContent = `Current Grid Size: ${side_length}x${side_length}`;
    SIZE_TEXT.value = ``;
}

renderGrid();