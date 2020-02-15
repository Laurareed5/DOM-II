// Your code goes here
let busImg = document.querySelector('img')
busImg.addEventListener('click', () => {
    busImg.style.transform = "scale(0.5)"
    busImg.style.transition = "transform 1s";
})