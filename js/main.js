$(document).ready(function() {
    $(".fa-bars").on("click",function() {
        $("nav ul").slideToggle(400);
    })

    let fix = $(".fixed");

    $(window).scroll(function() {

        if ($(window).scrollTop() > 600) {
            fix.fadeIn(400);
        }else {
            fix.fadeOut(400);
        }

    })

    $(fix).on("click",function() {
        $("html,body").animate({
            scrollTop:0
        });
    })

});