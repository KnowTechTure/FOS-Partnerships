$(document).ready(function () {
    var entity = 2; // 1.- partenr | 2.- FOS
    var init_lyt = 4;

    switch (entity) {
        case 1:
            $('#ui_layout_partner').show();
            $('.ui_layout_fos').hide();
            break;
        case 2:
            $('#ui_layout_partner').hide();
            $('.ui_layout_fos').show();
            break;
    }

    switch (init_lyt) {
        case 1:
            $('.LYT1-Wrapper').show();
            $('.LYT2-Wrapper').hide();
            $('.LYT3-Wrapper').hide();
            $('.LYTQs-Wrapper').hide();
            break;
        case 2:
            $('.LYT1-Wrapper').hide();
            $('.LYT2-Wrapper').show();
            $('.LYT3-Wrapper').hide();
            $('.LYTQs-Wrapper').hide();
            break;
        case 3:
            $('.LYT1-Wrapper').hide();
            $('.LYT2-Wrapper').hide();
            $('.LYT3-Wrapper').show();
            $('.LYTQs-Wrapper').hide();
            break;
        case 4:
            $('.LYT1-Wrapper').hide();
            $('.LYT2-Wrapper').hide();
            $('.LYT3-Wrapper').hide();
            $('.LYTQs-Wrapper').show();
            break;
    }

    //Nav

    $("#partner").click(function () {
        $('#fos_cnt').hide();
        $('#partner_cnt').show();
        $("#fos").removeClass('active_nav');
        $("#partner").addClass('active_nav');

        $('#ui_layout_partner').show();
        $('.ui_layout_fos').hide();
        entity = 1;
    });

    $(".lyt1").click(function () {
        switch (entity) {
            case 1:
                $('#ui_layout_partner .LYT1-Wrapper').show();
                $('#ui_layout_partner .LYT2-Wrapper').hide();
                $('#ui_layout_partner .LYT3-Wrapper').hide();
                $('#ui_layout_partner .LYTQs-Wrapper').hide();
                break;
            case 2:
                $('#ui_layout_fos .LYT1-Wrapper').show();
                $('#ui_layout_fos .LYT2-Wrapper').hide();
                $('#ui_layout_fos .LYT3-Wrapper').hide();
                $('#ui_layout_fos .LYTQs-Wrapper').hide();
                break;
        }
    });

    $(".lyt2").click(function () {
        switch (entity) {
            case 1:
                $('#ui_layout_partner .LYT1-Wrapper').hide();
                $('#ui_layout_partner .LYT2-Wrapper').show();
                $('#ui_layout_partner .LYT3-Wrapper').hide();
                $('#ui_layout_partner .LYTQs-Wrapper').hide();
                break;
            case 2:
                $('#ui_layout_fos .LYT1-Wrapper').hide();
                $('#ui_layout_fos .LYT2-Wrapper').show();
                $('#ui_layout_fos .LYT3-Wrapper').hide();
                $('#ui_layout_fos .LYTQs-Wrapper').hide();
                break;
        }
    });

    $(".lyt3").click(function () {
        switch (entity) {
            case 1:
                $('#ui_layout_partner .LYT1-Wrapper').hide();
                $('#ui_layout_partner .LYT2-Wrapper').hide();
                $('#ui_layout_partner .LYT3-Wrapper').show();
                $('#ui_layout_partner .LYTQs-Wrapper').hide();
                break;
            case 2:
                $('#ui_layout_fos .LYT1-Wrapper').hide();
                $('#ui_layout_fos .LYT2-Wrapper').hide();
                $('#ui_layout_fos .LYT3-Wrapper').show();
                $('#ui_layout_fos .LYTQs-Wrapper').hide();
                break;
        }
    });

    $(".lyt4").click(function () {
        switch (entity) {
            case 1:
                $('#ui_layout_partner .LYT1-Wrapper').hide();
                $('#ui_layout_partner .LYT2-Wrapper').hide();
                $('#ui_layout_partner .LYT3-Wrapper').hide();
                $('#ui_layout_partner .LYTQs-Wrapper').show();
                break;
            case 2:
                $('#ui_layout_fos .LYT1-Wrapper').hide();
                $('#ui_layout_fos .LYT2-Wrapper').hide();
                $('#ui_layout_fos .LYT3-Wrapper').hide();
                $('#ui_layout_fos .LYTQs-Wrapper').show();
                break;
        }
    });

    $("#fos").click(function () {
        $('#partner_cnt').hide();
        $('#fos_cnt').show();
        $("#partner").removeClass('active_nav');
        $("#fos").addClass('active_nav');

        $('#ui_layout_partner').hide();
        $('.ui_layout_fos').show();
        entity = 2;
    });

});