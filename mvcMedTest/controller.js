
// controller
function changeColor(color, change) {
    if (color == 'red') red = clamp(red+change, 0, 255);
    else if (color == 'green') green += change;
    else if (color == 'blue') blue += change;
    updateView();
}

function clamp(value, min, max){
    return Math.max(min, Math.min(max, value));
}