const SKETCH_CONTAINER = document.querySelector('#sketch-container');
SKETCH_CONTAINER.style.backgroundColor = `gray`;
const SIZE_TEXT = document.querySelector('#size-text');

const CLEAR_BUTTON = document.querySelector('#clear-grid');
CLEAR_BUTTON.addEventListener("click", function() {
    renderGrid();
});

const SIZE_BUTTON = document.querySelector('#submit-size');
SIZE_BUTTON.addEventListener("click", function() {
    side_length = Number(SIZE_TEXT.value);
    renderGrid();
});

const DEFAULT_LENGTH = 16;
let side_length = DEFAULT_LENGTH;

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
}

renderGrid();