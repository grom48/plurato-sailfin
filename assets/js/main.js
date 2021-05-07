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

function imageFun() {
    var Image_Id = document.querySelector(".yellow-dask");
    if (Image_Id.scr.match("assets/img/yellow-dask.svg")) {
        Image_Id.src = "assets/img/white-dask-svg";
    } else {
        Image_Id.src = "assets/img/yellow-dask.svg";
    }
}




