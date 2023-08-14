
let img = ["img/hotel-2.jpeg", "img/hotel-3.jpeg", "img/hotel-2.jpeg", '/img/hotel-1.jpeg'];

let sliderImg = document.getElementById('sliderImg');
var click = 0
const handleNextClick = () => {
    if (click === img.length) {
        click = 0;
    }
    const imgIndex = img[click];
    sliderImg.setAttribute('src', imgIndex)
    click++;
}
const handlePreClick = () => {
    if (click == -1) {
        click = 3;
    }
    const imgIndex = img[click];
    sliderImg.setAttribute('src', imgIndex)
    click--;
}