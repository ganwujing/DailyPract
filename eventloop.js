function changeRed() {
    showColor('red');
    setTimeout(() => {
        changeYellow();
    }, 3000);
}

function changeYellow() {
    showColor('Yellow');
    setTimeout(() => {
        changeGreen();
    }, 1000)
}

function changeGreen() {
    showColor('green');
    setTimeout(() => {
        changeRed();
    }, 2000)
}



function showColor(color) {
    document.getElementById('lamp').style.backgroundColor = color;
}
changeRed();