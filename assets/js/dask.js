let btnOwl = document.getElementsByClassName("btn-owl")
let slide = document.getElementById("slide")

btnOwl[0].onclick = function() {
    slide.style.transform = "translateX(0px)";
    for (i=0;i<4;i++) {
        btnOwl[i].classList.remove("active-owl")
    }
    this.classList.add("active-owl")
}

btnOwl[1].onclick = function() {
    slide.style.transform = "translateX(-1500px)";
    for (i=0;i<4;i++) {
        btnOwl[i].classList.remove("active-owl")
    }
    this.classList.add("active-owl")
}

btnOwl[2].onclick = function() {
    slide.style.transform = "translateX(-3000px)";
    for (i=0;i<4;i++) {
        btnOwl[i].classList.remove("active-owl")
    }
    this.classList.add("active-owl")
}

btnOwl[3].onclick = function() {
    slide.style.transform = "translateX(-4500px)";
    for (i=0;i<4;i++) {
        btnOwl[i].classList.remove("active-owl")
    }
    this.classList.add("active-owl")
}

const sliderContainer = document.querySelector(".slider-image");
const sliderBtnLeft = document.querySelector(".slider--btn-left");
const sliderBtnRight = document.querySelector(".slider--btn-right");
const sliderHeading = document.querySelector(".slider--heading");
const sliderHeadingFour = document.querySelector(".slider--heading-four");

const sliderImage = [
  {
    src: "assets/img/man-dask.png",
    heading: "Easy to use",
    headingFour:
      "You can easily learn how to use hydrofoil dask in less than an hour",
  },
  {
    src: "assets/img/sailfin_nino.png",
    heading: "Fast and Eco",
    headingFour: "This dask are fast and eco friendly",
  },
];

let slideCounter = 0;

const startSlider = () => {
  sliderContainer.style.backgroundImage =
   
  `url(${sliderImage[0].src})`;
  sliderHeading.innerHTML = sliderImage[0].heading;
  sliderHeadingFour.innerHTML = sliderImage[0].headingFour;
};

sliderBtnRight.addEventListener("click", () => {
    if(slideCounter === sliderContainer.length - 1) {
        sliderContainer.style.backgroundImage = `
        url(${slierImage[0].src})`;
        sliderHeading.innerHTML = sliderImage[0].heading;
        sliderHeadingFour.innerHTML = sliderImage[0].headingFour;
        slideCounter = -1;

        sliderContainer.classList.add("fadeIn");
        setTimeout(() => {
            sliderContainer.classList.remove("fadeIn")
        }, 1000)
    }
    sliderContainer.style.backgroundImage = `
    url(${sliderImage[slideCounter + 1].src})`;
    sliderHeading.innerHTML = sliderImage[slideCounter + 1].heading;
    sliderHeadingFour.innerHTML = sliderImage[slideCounter + 1].headingFour;
    slideCounter++;
    sliderContainer.classList.add("fadeIn");
    setTimeout(() => {
        sliderContainer.classList.remove("fadeIn");
        sliderHeading.classList.remove("fadeIn")
    }, 1000) 
});

sliderBtnLeft.addEventListener("click", () => {
    if (slideCounter === sliderContainer.length) {
        sliderContainer.style.backgroundImage = `
        url(${slierImage[-1].src})`;
        sliderHeading.innerHTML = sliderImage[0].heading;
        sliderHeadingFour.innerHTML = sliderImage[0].headingFour;
        slideCounter = 0;

        sliderContainer.classList.add("fadeIn");
        setTimeout(() => {
            sliderContainer.classList.remove("fadeIn")
        }, 1000)
    }
    sliderContainer.style.backgroundImage = `
    url(${sliderImage[slideCounter - 1].src})`;
    sliderHeading.innerHTML = sliderImage[slideCounter - 1].heading;
    sliderHeadingFour.innerHTML = sliderImage[slideCounter - 1].headingFour;
    slideCounter--;
    sliderContainer.classList.add("fadeIn");
    setTimeout(() => {
        sliderContainer.classList.remove("fadeIn");
    }, 1000) 
})

startSlider();