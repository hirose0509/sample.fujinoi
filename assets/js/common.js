$(function () {

  // h_btn

  $(".h_btn").click(function () {
    $(this).toggleClass('active');
    $(".main_nav").toggleClass('panelactive');
  });

  $(".main_nav a").click(function () {
    $(".h_btn").removeClass('active');
    $(".main_nav").removeClass('panelactive');
  });


  // toTop
  var pagetop = $('#toTop');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 600) {
      pagetop.fadeIn(500);
    } else {
      pagetop.fadeOut(200);
    }
  });

  pagetop.click(function () {
    $('body, html').animate({ scrollTop: 0 }, 1000);
    return false;
  });

  // スマホ用予約ボタン
  var f_area = $('.footer_area');

  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      f_area.fadeIn();
    } else {
      f_area.fadeOut();
    }
  });

});