createGrid(10);

const clearBtn = document.querySelector("#clear-btn");
let gridSize = clearBtn.addEventListener('click', function(){createGrid(getGridSize())});

