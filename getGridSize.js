function getGridSize() {
    let gridSizeInput = prompt("How many rows and columns of squares do you want the grid to contain?");

    if (gridSizeInput < 1 || gridSizeInput > 100) {
        alert("You must chose a number between 1 and 100!");
    } else {
        return gridSizeInput;
    }
}