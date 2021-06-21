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