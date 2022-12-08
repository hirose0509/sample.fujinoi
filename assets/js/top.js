$(function () {

  // main_nav
  function FixedAnime() {
    var headerH = $('#header').outerHeight(true);
    var scroll = $(window).scrollTop();
    if (scroll >= headerH) {
      $('.main_nav').addClass('fixed');
    } else {
      $('.main_nav').removeClass('fixed');
    }

    $(window).scroll(function () {
      FixedAnime();
    });

  }

    // main_slide
    var count = $(".main_slide li").length;
    var current = 1;
    var next = 2;
    var interval = 8000;
    var duration = 3000;
    var timer;
  
    $(".main_slide li:not(:first-child)").hide();
  
    timer = setInterval(slideTimer, interval);
  
    function slideTimer() {
      $(".main_slide li:nth-child(" + current + ")").fadeOut(duration);
      $(".main_slide li:nth-child(" + next + ")").fadeIn(duration);
  
      current = next;
      next = ++next;
  
      if (next > count) {
        next = 1;
      }
    }

  });