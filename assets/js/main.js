$(function() {
    $(".navbar.fixed-top").length && $(window).on("scroll touchmove", function(e) {
        if (!($("#main-page").length <= 0)) {
            $(this).scrollTop() > 200 ? $(".navbar.fixed-top").addClass("switch-color") : $(".navbar.fixed-top").removeClass("switch-color")
        }
    })
})