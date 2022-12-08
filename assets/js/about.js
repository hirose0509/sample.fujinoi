$(function () {

    // main_nav
    if (!navigator.userAgent.match(/(iPhone|Android)/)) {
        $(function () {
            function FixedAnime() {
                var headerH = $('.main_nav').outerHeight(true);
                var scroll = $(window).scrollTop();
                if (scroll >= headerH) {//headerの高さ以上になったら
                    $('.main_nav').addClass('fixed');//fixedというクラス名を付与
                } else {//それ以外は
                    $('.main_nav').removeClass('fixed');//fixedというクラス名を除去
                }
            }
            // 画面をスクロールをしたら動かしたい場合の記述
            $(window).scroll(function () {
                FixedAnime();/* スクロール途中からヘッダーを出現させる関数を呼ぶ*/
            });
        });
    }

    // h_btn
    $(".h_btn").click(function () {//ボタンがクリックされたら
        $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
        $(".main_nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
    });

    $(".main_nav a").click(function () {//ナビゲーションのリンクがクリックされたら
        $(".h_btn").removeClass('active');//ボタンの activeクラスを除去し
        $(".main_nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
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