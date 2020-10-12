function createGrid(rows, columns) {
    let gridContainer = document.getElementById("grid-container");
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    totalItems = rows * columns;
    for (i = 1; i <= totalItems; i++) {
        let item = document.createElement("div");
        item.classList.add("grid-item");
        item.style.backgroundColor = "white";
        item.addEventListener("mouseover", function(){drawPath(item)});
        gridContainer.appendChild(item);
    }

    gridContainer.style.gridTemplateColumns = "repeat(" + columns + ", 1fr)";
}