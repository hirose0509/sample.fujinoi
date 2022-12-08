$(function () {

    // main_nav
    if (!navigator.userAgent.match(/(iPhone|Android)/)) {
      $(function () {
        function FixedAnime() {
          var headerH = $('.main_nav').outerHeight(true);
          var scroll = $(window).scrollTop();
          if (scroll >= headerH) {
            $('.main_nav').addClass('fixed');
          } else {
            $('.main_nav').removeClass('fixed');
          }
        }
  
        $(window).scroll(function () {
          FixedAnime();
        });
      });
    }
  
  });