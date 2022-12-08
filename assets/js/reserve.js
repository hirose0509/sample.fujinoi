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

    // form
    $('#form').validate({
        rules: {
            name_er: {
                required: true,
            },
            email_er: {
                required: true,
                email: true
            },
            content_er: {
                required: true,
            },
        },

        messages: {
            name_er: {
                required: '必須項目を入力してください。'
            },
            email_er: {
                required: '必須項目を入力してください。',
                email: 'メールアドレスを入力してください。'
            },
            content_er: {
                required: '必須項目を入力してください。'
            }
        },
    });

    
  // tab切り替え
  $('.tab').click(function () {
    $('.active').removeClass('active');
    $(this).addClass('active');
    const index = $(this).index();
    $('.box').eq(index).fadeIn(1000).addClass('active');
    $('.box').not('.active').hide();
  });

});