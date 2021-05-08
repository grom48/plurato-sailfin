$(".num").counterUp({delay:10,time: 500});

const hamburger = document.querySelector(".ham");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
    if (overlay.style.height === "50%") {
        overlay.style.height = "0%";
    } else {
        overlay.style.height = "50%"
    }
})

const white = document.querySelector(".white");
const yellow = document.querySelector(".yellow");
const red = document.querySelector(".red");
let image = document.querySelector(".yellow-dask");

white.addEventListener("click", () => {
    image.src = "assets/img/white-dask.svg"
})

yellow.addEventListener("click", () => {
    image.src = "assets/img/yellow-dask.svg"
})

red.addEventListener("click", () => {
    image.src = "assets/img/red-dask.png"
})




