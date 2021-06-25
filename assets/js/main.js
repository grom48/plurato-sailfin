// !Brojač
$(".num").counterUp({delay:10, time: 1000});

// !Hamburger

const hamburger = document.querySelector(".ham");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
    if (overlay.style.height === "50%") {
        overlay.style.height = "0%";
    } else {
        overlay.style.height = "50%"
    }
})

// !Promjena slike na klik

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
    image.src = "assets/img/red-dask.svg"
})



// *Get the button:
mybutton = document.getElementById("myBtn");

// *When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
    }
    
    // *When the user clicks on the button, scroll to the top of the document
    function topFunction() {
      document.body.scrollTop = 0; // For Safari
      document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    // !Click components
    $(function () {
      $(window).on('hashchange', function () {
      var tabContainers = $('.tabs > div'),
      hash = window.location.hash != '' ? window.location.hash : '#first';
      
      console.log(hash)
      
      tabContainers.hide();
      tabContainers.filter(hash).fadeIn();
      $('.tabNavigation li a').removeClass('selected');
      $('a[href="' + hash + '"]', '.tabNavigation').addClass('selected');
    }).trigger('hashchange');
  });

  // !Kopiraj adresu
  
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
    
    const button = document.querySelector(".copy-btn");
    const tooltips = document.querySelector(".tooltips");
    
    button.addEventListener("click", () => {
      tooltips.classList.add("show");
      setTimeout(function() {
        tooltips.classList.remove("show");
    }, 700)
    })
  
    // !Accordion
  
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

