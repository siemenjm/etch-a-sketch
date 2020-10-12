function createGrid(rows, columns) {
    totalItems = rows * columns;
    for (i = 1; i <= totalItems; i++) {
        let item = document.createElement("div");
        item.classList.add("grid-item");
        item.textContent = i;
        document.getElementById("main-container").appendChild(item);
    }

    document.getElementById("main-container").style.gridTemplateColumns = "1fr repeat(" + columns + ", 1fr);";

}

createGrid(16,16);