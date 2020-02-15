// Your code goes here
let busImg = document.querySelector('img')
busImg.addEventListener('click', () => {
    busImg.style.transform = "scale(0)"
    busImg.style.transition = "transform 1s";
})

const coLor = document.querySelector('p')
coLor.addEventListener('dblclick', () => {
    coLor.style.color = "yellow";
})