const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay")

hamburger.addEventListener("click", () => {
    if (overlay.style.height === "50%") {
        overlay.style.height = "0%";
    } else {
        overlay.style.height = "50%"
    }
})