function drawPath(gridItem) {
    let maxRGBValue = 255;
    let redValue = Math.random() * maxRGBValue;
    let greenValue = Math.random() * maxRGBValue;
    let blueValue = Math.random() * maxRGBValue;

    gridItem.style.backgroundColor = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
    gridItem.style.borderColor = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
}