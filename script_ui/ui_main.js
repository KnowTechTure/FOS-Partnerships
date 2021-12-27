$(document).ready(function () {

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
    
});