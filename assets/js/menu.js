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

  // tab切り替え
  $('.tab_btn').click(function () {
    $('.active').removeClass('active');
    $(this).addClass('active');
    $('.active').removeClass('active');
    const index = $(this).index();
    $('.menu_tab').eq(index).fadeIn(1000).addClass('active');
    $('.menu_tab').not('.active').hide();
  });
  
  // btn切り替え
  $('.hiru_btn').click(function () {
    $(this).addClass('active');
    $('.yoru_btn').removeClass('active');
  });

  $('.yoru_btn').click(function () {
    $(this).addClass('active');
    $('.hiru_btn').removeClass('active');
  });
  
});