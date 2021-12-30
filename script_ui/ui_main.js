$(document).ready(function () {
    var w100 = $(window).width();
    var wp_200 = w100 - 200;
    var init = 4;

    setDisplayBoardSize();


    switch (init) {
        case 1:
            $('.LYT1-Wrapper').show();
            $('.LYT2-Wrapper').hide();
            $('.LYT3-Wrapper').hide();
            $('.LYTD-Wrapper').hide();
            break;
        case 2:
            $('.LYT1-Wrapper').hide();
            $('.LYT2-Wrapper').show();
            $('.LYT3-Wrapper').hide();
            $('.LYTD-Wrapper').hide();
            break;
        case 3:
            $('.LYT1-Wrapper').hide();
            $('.LYT2-Wrapper').hide();
            $('.LYT3-Wrapper').show();
            $('.LYTD-Wrapper').hide();
            break;
        case 4:
            $('.LYT1-Wrapper').hide();
            $('.LYT2-Wrapper').hide();
            $('.LYT3-Wrapper').hide();
            $('.LYTD-Wrapper').show();
            break;
    }

    $("#partner").click(function () {
        $('#fos_cnt').hide();
        $('#partner_cnt').show();
        $("#fos").removeClass('active_nav');
        $("#partner").addClass('active_nav');
    });

    $("#lyt1").click(function () {
        $('.LYT2-Wrapper').hide();
        $('.LYT1-Wrapper').show();
    });

    $("#lyt2").click(function () {
        $('.LYT1-Wrapper').hide();
        $('.LYT2-Wrapper').show();
    });

    $("#fos").click(function () {
        $('#partner_cnt').hide();
        $('#fos_cnt').show();
        $("#partner").removeClass('active_nav');
        $("#fos").addClass('active_nav');

    });

    // show - hide ui_nav
    $(document).bind('keypress', function (event) {

        if (event.which === 80 && event.shiftKey) {
            // SHIFT + P

            setDisplayBoardSize(event.which);

        };
    });

    function setDisplayBoardSize() {

        if (itsVisible('.grd_nav')) {

            $('.grd_nav').hide();

            $('.grd_layout').css({
                "width": w100
            });

            $('.LYT2-Wrapper').css({
                "width": w100
            });

        } else {

            $('.grd_nav').show();
            $('.grd_layout').css({
                "width": wp_200
            });

            $('.LYT2-Wrapper').css({
                "width": wp_200
            });
        }
    }

    $(window).resize(function () {
        w100 = $(window).width();
        wp_200 = w100 - 200;

        if (itsVisible('.grd_nav')) {
            $('.LYT2-Wrapper').css({
                "width": wp_200
            });
        } else {
            $('.LYT2-Wrapper').css({
                "width": w100
            });
        }
    });

    function itsVisible(elemento) {
        var itsVisible = false;
        if ($(elemento).is(':visible') && $(elemento).css("visibility") != "hidden"
            && $(elemento).css("opacity") > 0) {
            itsVisible = true;
        }

        return itsVisible;
    }

});