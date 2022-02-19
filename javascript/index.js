

$(document).ready(function () {
    
    // スクロール表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $('.scroll').fadeIn(10);
        } else {
            $('.scroll,.scroll_clicked').fadeOut(10);
        }
    });

    // スクロール表示html追加
    $('header>.inner_wrap .user_menu').clone().appendTo('.scroll .header_top');
    $('header>.inner_wrap .login_menu').clone().appendTo('.scroll');

    // スクロール＋検索欄クリック表示html追加
    $('header>.inner_wrap .header_top').clone().appendTo('.scroll_clicked>.inner_wrap');
    $('header>.inner_wrap .login_menu').clone().appendTo('.scroll_clicked>.inner_wrap');
    $('header>.inner_wrap .form_hotel').clone().appendTo('.scroll_clicked>.inner_wrap');
    $('header>.inner_wrap .form_experience').clone().appendTo('.scroll_clicked>.inner_wrap');

    $('.scroll .grobal_icon,.scroll_clicked .grobal_icon').attr('src', 'images/grobal_black.svg');
    $('.scroll_clicked .logo').attr('src', 'images/logo_red.svg');

    $('.scroll .scroll_search>button').click(function () {
        $('.scroll_clicked').show();
    });

    // カレンダー上部html追記
    $('.flatpickr-calendar').prepend('<div class="select_calendar"><button class="date_calendar">カレンダー</button><button class="date_flexible">柔軟な日付設定</button></div>');

    // カレンダー切り替え
    $('.flatpickr-calendar .date_flexible').click(function () {
        $('.calendar_date_flexible').show();
        $('.flatpickr-calendar').hide();
    });

    $(document).click(function (event) {
        if (!$(event.target).closest('.flatpickr-calendar .date_flexible,.select_period button,.select_month button').length) {
            $('.calendar_date_flexible').hide();
        } else {
            $('.calendar_date_flexible').show();
        }
    });

    $('.calendar_date_flexible .date_calendar').click(function () {
        $('.flatpickr-calendar').show();
        $('.calendar_date_flexible').hide();
    });

    // カレンダー項目クリック時
    $('.select_period button').click(function () {
        $(this).css('border', '2px solid');
    });

    $('.select_month li button').click(function () {
        $(this).toggleClass('clicked');
    });

    // 検索種別表示切替

    $('.hotel_button').click(function () {
        $('.hotel').show();
        $('.experience').hide();
    });

    $('.experience_button').click(function () {
        $('.hotel').hide();
        $('.experience').css("display", "flex");
    });

    // 検索種別ボタン選択状態切り替え
    $('.hotel_button').removeClass('hidden');

    $('.hotel_button').click(function () {
        $(this).removeClass('hidden');
        $('.experience_button').addClass('hidden');
    });

    $('.experience_button').click(function () {
        $(this).removeClass('hidden');
        $('.hotel_button').addClass('hidden');
    });


    // 検索欄フォーカス時アクション
    $('.hotel_location>input,.hotel_checkin>input,.hotel_checkout>input,#guest').focus(function () {
        $('.hotel>li:first-child').css('flexBasis', '260px');
        $('.hotel>li:nth-child(2), .hotel>li:nth-child(3)').css('flexBasis', '165px');
        $('.hotel_guest>li:first-child').css('flexBasis', '156px');
        $('.hotel_guest>li:last-child').css('flexBasis', '104px');
        $('.hotel>li:last-child').css('flexBasis', '260px');
        $('.search_button').hide();
        $('.long_search_button').show();
    });

    $('.hotel_location>input,.hotel_checkin>input,.hotel_checkout>input,#guest').blur(function () {
        $('.hotel>li:first-child').css('flexBasis', '270px');
        $('.hotel>li:nth-child(2), .hotel>li:nth-child(3)').css('flexBasis', '180px');
        $('.hotel_guest>li:first-child').css('flexBasis', '165px');
        $('.hotel_guest>li:last-child').css('flexBasis', '60px');
        $('.hotel>li:last-child').css('flexBasis', '225px');
        $('.search_button').show();
        $('.long_search_button').hide();
    });

    $('.experience_location>input').focus(function () {
        $('.experience>li:first-child').css('flexBasis', '387px');
        $('.experience_date>li:first-child').css('flexBasis', '360px');
        $('.experience_date>li:last-child').css('flexBasis', '109px');
        $('.experience>li:last-child').css('flexBasis', '469px');
        $('.search_button').hide();
        $('.long_search_button').show();
    });

    $('.experience_location>input').blur(function () {
        $('.experience>li:first-child').css('flexBasis', '410px');
        $('.experience_date>li:first-child').css('flexBasis', '255px');
        $('.experience_date>li:last-child').css('flexBasis', '60px');
        $('.experience>li:last-child').css('flexBasis', '446px');
        $('.search_button').show();
        $('.long_search_button').hide();
    });

    //  検索部分フォーカス時表示操作・切替
    $('.hotel_location>input').focus(function () {
        $(this).parents('.form_hotel').find('.flexible_search_sub').show();
        $('.hotel_location').addClass('focus_shadow_right');
    });

    $('.hotel_location>input').blur(function () {
        $('.flexible_search_sub').hide();
        $('.hotel_location').removeClass('focus_shadow_right');
    });

    $('.hotel_checkin>input,.hotel_checkout>input').focus(function () {
        $(this).parent().addClass('focus_shadow_right focus_shadow_left');
    });

    $('.hotel_checkin>input,.hotel_checkout>input').blur(function () {
        $(this).parent().removeClass('focus_shadow_right focus_shadow_left');
    });

    $('#guest').click(function () {
        $(this).parents('.form_hotel').find('.select_guest').show();
        $('.hotel_guest').addClass('focus_shadow_left');
    });

    $(document).click(function (event) {
        if (!$(event.target).closest('.select_guest,#guest,.modaal-container').length) {
            $('.select_guest').hide();
            $('.hotel_guest').removeClass('focus_shadow_left');
        } else {
            $('.select_guest').show();
            $('.hotel_guest').addClass('focus_shadow_left');
        }
    });

    $('.experience_location>input').focus(function () {
        $(this).parents('.form_experience').find('.experience_location_search').show();
        $('.experience_location').addClass('focus_shadow_right');
    });

    $('.experience_location>input').blur(function () {
        $(this).parents('.form_experience').find('.experience_location_search').hide();
        $('.experience_location').removeClass('focus_shadow_right');
    });

    $('.date').focus(function () {
        $('.select_calendar').remove();
        $('.experience >li:last-child').addClass('focus_shadow_left');
    });

    $('.date').blur(function () {
        $('.flatpickr-calendar').prepend('<div class="select_calendar"><button class="date_calendar">カレンダー</button><button class="date_flexible">柔軟な日付設定</button></div>');
        $('.experience >li:last-child').removeClass('focus_shadow_left');
    });


    // ログインメニュー表示切替
    $('.login_menu_button').click(function () {

        if ($('#login_menu_flag').val() == 0) {
            $('.login_menu').show();
            $('#login_menu_flag').val(1)

        } else {
            $('.login_menu').hide();
            $('#login_menu_flag').val(0)
        }
    });

    // 介助動物モーダル
    $('.asist_animal_link').modaal();



});