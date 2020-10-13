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
        let darkenPercentage = 0.1;
        let darkenColorChange = maxRGBValue * darkenPercentage;

        let currentColor = window.getComputedStyle(gridItem).getPropertyValue("background-color");
        let currentRGBValue = parseInt(currentColor.slice(4,7));
        let newRGBValue = (currentRGBValue - darkenColorChange).toString();
        let newColor = "rgb(" + newRGBValue + ", " + newRGBValue + ", " + newRGBValue + ")";
        
        gridItem.style.backgroundColor = newColor;
        gridItem.style.borderColor = newColor;
    }
}