var header = document.getElementById('header');
var degree = 0;
function rotateHeader() {
    degree = degree + 6;
    degree = degree % 360;
    header.style.transform = 'rotateX(' + degree + 'deg)';
    // header.style.transform = 'rotateY(' + degree + 'deg)';
    // header.style.transform = 'rotateZ(' + degree + 'deg)';

    if ((0 <= degree && degree < 90) || (270 <= degree && degree < 360)) {
        header.className = 'face';
        header.style.opacity = '1';
    } else {
        header.className = 'back';
        header.style.opacity = '0.4';
    }
}
setInterval(rotateHeader, 20);
