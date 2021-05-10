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


function Clipboard_CopyTo(value) {
    let tempInput = document.createElement("input");
    tempInput.value = value;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
  }
  
  document.querySelector('#Copy').onclick = function() {
    Clipboard_CopyTo('Ul. Ruđera Boškovića 19, 21000, Split');
  }

  const accordion = document.querySelector('.accordion');
  const items = accordion.querySelectorAll('.accordion__item');
  
  
  items.forEach((item) => {
    const title = item.querySelector('.accordion__title');
    
    title.addEventListener('click', (e) => {
      const opened_item = accordion.querySelector('.is-open');
      
      // Toggle trenutni item
      toggle_item(item); 
      
      // Zatvori prije otvorene iteme ako postoje
      if (opened_item && opened_item !== item) {
        toggle_item(opened_item);
      }
      
      
    });
  });
  
  const toggle_item = (item) => {
    const body = item.querySelector('.accordion__body');
    const content = item.querySelector('.accordion__content');
          
    if (item.classList.contains('is-open')) {
      body.removeAttribute('style');
      item.classList.remove('is-open');
    }else {
      body.style.height = body.scrollHeight + 'px';
      item.classList.add('is-open');
    }
  }


