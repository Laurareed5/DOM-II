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

mapImg.addEventListener('dblclick', () => {
    mapImg.style.transform = "scale(0.2)"
    mapImg.style.transition = "transform 1s";
})


const stopProp = document.querySelector('.nav');
stopProp.addEventListener('wheel', (event) => {
    stopProp.style.transform = 'rotate(360deg)'
    stopProp.style.transition = '.8s'
    event.stopPropagation()
})

const coLor = document.querySelector('h2')
coLor.addEventListener('click', () => {
    coLor.style.color = "red";
})

const bottom = document.querySelector('footer')
bottom.addEventListener('click', () => {
    bottom.style.backgroundColor = "#17A2B8";
})


const boatImg = document.querySelector('.content-destination')
boatImg.addEventListener('mouseover', () => {
    boatImg.style.transform = "scale(1.5)"
    boatImg.style.transition = "transform 1s";
})

boatImg.addEventListener('click', () => {
    boatImg.style.transform = "scale(0)"
    boatImg.style.transition = "transform 1s";
})

const invertImg = document.querySelector('.inverse-content')
invertImg.addEventListener('mouseenter', () => {
    invertImg.style.transform = "scale(0)"
    invertImg.style.transition = "transform 1s";
})


document.querySelectorAll('.btn').forEach(funSmile => {
    funSmile.addEventListener('mouseover', () => {
        funSmile.textContent = ":)"
    })
})

const liNks = document.querySelector('.nav-link')
liNks.addEventListener('click', (event) => {
    event.preventDefault();
})



