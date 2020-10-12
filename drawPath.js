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
        let maxRGBValue = 255;
        let percentDarker = 0.1;
        let colorValueChange = maxRGBValue * percentDarker;
        
        let currentRGBValue = getComputedStyle(gridItem).backgroundColor;
        let colorValue = currentRGBValue.slice(4, 7);
        let newColorValue = colorValue - colorValueChange;
        let newColorValueString = newColorValue.toString();

        let newRGBValue = currentRGBValue
        let colorIndex = 1;
        while (colorIndex <= 3) {
            newRGBValue = newRGBValue.replace(colorValue, newColorValueString);
        
            colorIndex++;
        }
        console.log(newRGBValue);

        gridItem.style.backgroundColor = newRGBValue;
        gridItem.style.borderColor = newRGBValue;
    }
}