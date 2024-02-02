
let images = {
    titan: "./img/titan.png",
    white: "./img/white.png",
    black: "./img/black.png"
}
let titan = document.querySelector('#one')
let img = document.querySelector('.under_countainer img')

titan.onclick = () => {
    img.src = images.titan
}