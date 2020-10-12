createGrid(10, "black");

const clearBtnBlack = document.querySelector("#clear-btn-black");
clearBtnBlack.addEventListener('click', function(){createGrid(getGridSize(), "black")});

const clearBtnRGB = document.querySelector("#clear-btn-RGB");
clearBtnRGB.addEventListener('click', function(){createGrid(getGridSize(), "RGB")});

const clearBtnDarken = document.querySelector("#clear-btn-darken");
clearBtnDarken.addEventListener('click', function(){createGrid(getGridSize(), "darken")});