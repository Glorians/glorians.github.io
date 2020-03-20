
$(window).scroll(function () {
    if (window.innerWidth >= 768) {
        var scroll = $(window).scrollTop();

        if (scroll >= 2) {
            $("header").addClass("sticky");
        } else {
            $("header").removeClass("sticky");
        }

    }
});


$(function () {
    $(".hamburger").on("click", function () {
        $(".header-menu").slideToggle(300, function () {
            if ( $(this).css("display") === "none") {
            }
        });
    });
});


// Mobile Version

if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
    console.log('this is a touch device');
} else {
    console.log('this is not a touch device');
    document.body.classList.add('no-touch');
}

