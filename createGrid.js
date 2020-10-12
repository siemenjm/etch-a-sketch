function createGrid(rows, columns) {
    totalItems = rows * columns;
    for (i = 1; i <= totalItems; i++) {
        let item = document.createElement("div");
        item.classList.add("grid-item");
        item.textContent = i;
        item.addEventListener("mouseover", function(){drawPath(item)});
        document.getElementById("main-container").appendChild(item);
    }

    document.getElementById("main-container").style.gridTemplateColumns = "repeat(" + columns + ", 1fr)";

}

createGrid(8,8);

