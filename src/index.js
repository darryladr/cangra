import $ from 'jquery'

$(function () {
    $(document).on("scroll", function () {
        var nav = $(".cangra-nav")
        nav.toggleClass("scrolled", $(this).scrollTop() > nav.height())
    })
})

$(function () {
    $("button").on("click", function () {
        $("button").removeClass("active")
        $(this).addClass("active")
    })
})