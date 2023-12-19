const DEFAULT_LENGTH = 16;
let side_length = DEFAULT_LENGTH;

const MODE_INFO = document.querySelector('#mode-info');

const NORMAL = 0;
const RAINBOW = 1;
const OPACITY = 2;

const NORMAL_BUTTON = document.querySelector('#normal-button');
NORMAL_BUTTON.addEventListener("click", () => {
    MODE_INFO.textContent = "Current Mode: Normal";
    renderGrid(NORMAL);
});

const RAINBOW_CHECKBOX = document.querySelector('#rainbow-toggle');

const OPACITY_BUTTON = document.querySelector('#opacity-button');
OPACITY_BUTTON.addEventListener("click", () => {
    MODE_INFO.textContent = "Current Mode: Opacity";
    renderGrid(OPACITY);
});

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

function renderGrid(mode = NORMAL) {
    clearGrid();

    for (let index = 0; index < side_length ** 2; index++) {

        let GRID_ELEMENT = document.createElement("div");
        if (mode === OPACITY) {
            GRID_ELEMENT.style.opacity = 0.0;
        }
        GRID_ELEMENT.addEventListener("mouseover", function(e) {
            if (RAINBOW_CHECKBOX.checked) {
                this.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
            }
            else {
                this.style.backgroundColor = "black";
            }
            switch(mode) {
                case OPACITY:
                    let currentOpac = this.style.opacity;
                    let newOpac = Number(currentOpac) + .1;
                    this.style.opacity = newOpac;
                    break;
                default:
                    break;
            }
        });
        GRID_ELEMENT.style.width = `${Math.floor(SKETCH_CONTAINER.clientWidth / side_length)}px`;
        GRID_ELEMENT.style.height = `${Math.floor(SKETCH_CONTAINER.clientHeight / side_length)}px`;
        SKETCH_CONTAINER.appendChild(GRID_ELEMENT);
    }
    GRID_INFO.style.color = "black";
    GRID_INFO.textContent = `Current Grid Size: ${side_length}x${side_length}`;
    SIZE_TEXT.value = ``;
}

window.addEventListener('resize', renderGrid);

renderGrid();