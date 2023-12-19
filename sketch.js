const SKETCH_CONTAINER = document.querySelector('#sketch-container');
SKETCH_CONTAINER.style.backgroundColor = `gray`;

console.log(SKETCH_CONTAINER.clientHeight);

let side_length = 16;

for (let index = 0; index < side_length ** 2; index++) {

    let GRID_ELEMENT = document.createElement("div");
    GRID_ELEMENT.addEventListener("mouseover", function(e) {
        this.style.backgroundColor = "black";
    });
    GRID_ELEMENT.style.width = `${Math.floor(SKETCH_CONTAINER.clientWidth / side_length)}px`;
    GRID_ELEMENT.style.height = `${Math.floor(SKETCH_CONTAINER.clientHeight / side_length)}px`;
    SKETCH_CONTAINER.appendChild(GRID_ELEMENT);
}