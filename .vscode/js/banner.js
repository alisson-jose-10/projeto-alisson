let time = 2000
let currentImageIndex = 0
let images = document.querySelectorAll("#slide img")
let max = images.length

function nextImage() {
  images[currentImageIndex].classList.remove("selected")

  currentImageIndex ++

  if(currentImageIndex >= max)
    currentImageIndex = 0

  images[currentImageIndex].classList.add("selected")

}

function start() {
  setInterval(() => {
    nextImage()
  }, time)

}

window.addEventListener("load", start)


function pause() {
  clearInterval()
}

let foto1 = document.getElementById("primeira");
let foto2 = document.getElementById("segunda");
function prox (){
      foto1++;
      nextImage("i"+foto1+"segunda")
}
function proxi (){
  foto2--;
  nextImage("i"+foto1+"primeira")
}

function pause() {
  clearInterval()
}
