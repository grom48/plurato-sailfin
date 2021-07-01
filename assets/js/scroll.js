$(function () { 
    $(window).scroll(function () {
      if ($(this).scrollTop() > 150) {
        $('.nav .main-logo ').attr('src','assets/img/white-logo2.svg');
      }
      if ($(this).scrollTop() < 150) {
        $('.nav .main-logo').attr('src','assets/img/logo.svg');
      }
    }) 
    $(window).scroll(function () {
      if($(window).scrollTop() > 150) {
        $("nav").addClass('fixed-nav');
      } else {
        $("nav").removeClass('fixed-nav');
      }
    });
  });  
 
  $(document).ready(function() {
    var navOffset = $("nav").offset().top;
 
    $("nav").wrap('<div class="nav-placeholder"></div>');
    $(".nav-placeholder").height($("nav").outerHeight());
 
    $(windows).scroll(function(){
      var scrollPos = $(window).scrollTop();
 
      if (scrollPos >= navOffset) {
        $("nav").addClass("fixed");
      } else {
        $("nav").removeClass("fixed")
      }
    })
  })

// *Get the button:
mybutton = document.getElementById("myBtn");

// *When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

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