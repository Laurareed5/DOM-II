// Your code goes here
let busImg = document.querySelector('img')
busImg.addEventListener('dblclick', () => {
    busImg.style.transform = "scale(0)"
    busImg.style.transition = "transform 1s";
})


const mapImg = document.querySelector('.img-content')
mapImg.addEventListener('mouseover', () => {
    mapImg.style.transform = "scale(2)"
    mapImg.style.transition = "transform 1s";
})