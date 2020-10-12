function createGrid(squaresPerSide, penColor) {
    let gridContainer = document.getElementById("grid-container");
    while (gridContainer.hasChildNodes()) {
        gridContainer.removeChild(gridContainer.firstChild);
    }

    totalItems = squaresPerSide ** 2;
    for (i = 1; i <= totalItems; i++) {
        let item = document.createElement("div");
        item.classList.add("grid-item");
        item.addEventListener("mouseover", function(){drawPath(item,penColor)});
        gridContainer.appendChild(item);
    }

    gridContainer.style.gridTemplateColumns = "repeat(" + squaresPerSide + ", 1fr)";
}