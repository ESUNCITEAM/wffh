$(document).ready(function () {
    //解決點擊延遲
    FastClick.attach(document.body);

    //選單滾動
    // if ($(window).width() > 768) {
    //     var nav_height = $('header').outerHeight();
    //     var new_top = [0, 0];
    //     $(window).scroll(function () {
    //         new_top[1] = $(window).scrollTop();
    //         if (new_top[0] - new_top[1] < 0) {
    //             new_top[0] = new_top[1];
    //             // $('#wrap').css('padding-top',nav_height);
    //             $('header').removeClass('mystyle').addClass('mystyle'); /* 幫選單加上固定效果 */
    //         } else {
    //             new_top[0] = new_top[1];
    //             $('header').removeClass('mystyle'); /* 移除選單固定效果 */
    //             $('header').css({
    //                 'top': -100,
    //                 'position': 'fixed'
    //             });
    //         }
    //     })
    // }

    //gotop        
    var gotop = $('#gotop');
    gotop.click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            gotop.fadeIn();
        } else {
            gotop.stop().fadeOut();
        }
    });

    //數位服務選單
    $('.function_ham').click(function () {
        $('.function_nav').toggleClass('function_nav_close')
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 800) {
            $('.goal').css('display','flex');
         } else{
            $('.goal').css('display','none');
         }
    });
   

    //m版漢堡選單
    $('#toggle').click(function (e) {
        $('.main-nav, nav.main-nav, #toggle, #header').toggleClass('on');
        e.preventDefault();
    });
    $('.main-nav ul.anchor li a').click(function () {
        $('#header,#toggle, .main-nav').removeClass('on')
    })
})