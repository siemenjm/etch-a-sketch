function drawPath(gridItem, penColor) {
    if (penColor === "black") {
        gridItem.style.backgroundColor = "black";
        gridItem.style.borderColor = "black";
    } else if (penColor === "RGB") {
        let maxRGBValue = 255;
        let redValue = Math.random() * maxRGBValue;
        let greenValue = Math.random() * maxRGBValue;
        let blueValue = Math.random() * maxRGBValue;

        gridItem.style.backgroundColor = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
        gridItem.style.borderColor = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
    } else if (penColor === "darken") {
        let currentRGBValue = gridItem.style.backgroundColor;
        alert(currentRGBValue);

        //gridItem.style.backgroundColor = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
        //gridItem.style.borderColor = "rgb(" + redValue + ", " + greenValue + ", " + blueValue + ")";
    }
}