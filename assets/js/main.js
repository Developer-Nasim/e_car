(function($) {
  "use strict";
 

  // Mobile nenu
  $('.humg-btn').click(function(){
    $('.humg-btn').toggleClass('humgbMenu')
  });
  $('.humg-btn').click(function(){
    $('.mobile-menu').toggleClass('menuActivve')
  }); 
 
  // owlCarousel
  $(".active").owlCarousel({
    loop: true, 
    items:3,
    nav: true,
    navText:['<img src="assets/img/icons/left.png" alt="">','<img src="assets/img/icons/right.png" alt="">'],
    responsive: {
      0: {
        items: 1, 
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
  $(".active-2").owlCarousel({
    loop: true,
    margin: 30,
    items:3,
    nav: true,
    navText:['<img src="assets/img/icons/left.png" alt="">','<img src="assets/img/icons/right.png" alt="">'],
    responsive: {
      0: {
        items: 1,
        margin: 0
      },
      767: {
        items: 2
      },
      992: {
        items: 3
      }
    }
  });
 
  // counter
  $('.counter').counterUp({
    delay: 10,
    time: 2000
  });
 
  // nice-select
  $(document).ready(function() {
    $('select').niceSelect();
  });

  // scroll-top top 
  var btn = $('.scroll-up'); 
  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('scrolltop');
    } else {
      btn.removeClass('scrolltop');
    }
  }); 
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });
  
 
})(jQuery);
