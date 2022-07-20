import $ from 'jquery'

$(function () {
    $(document).on("scroll", function () {
        var nav = $(".cangra-nav")
        var scrollTop = $(this).scrollTop()
        var prev = 0;
        nav.toggleClass("scrolled", scrollTop > 0)
        prev = scrollTop;
    })
})

$(function () {
    $(".hamburger").on("click", function () {
        $(this).children().toggleClass("active")
    })
})

$(function () {
    $(".package-button").on("click", function () {
        $("button").removeClass("active")
        $(this).addClass("active")
    })
})