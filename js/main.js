
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


$(document).ready(function () {
   $("#btn-close-popup").click(function () {
       $(".popup-container").css("display", "none")
   });

    $(".item-product").click(function () {
      console.log("click");
      let img = $(this).find(".item-product-img");
      let imgClass = $(img).attr("class");
      let arrayImgClass = imgClass.split(" ");
      let background = $("."+arrayImgClass[1]).css("background-image");
      let arrayBackground = background.split(" ");
      console.log(arrayBackground);
      let browser = navigator.userAgent;
      console.log(browser);
      let arrayUrl = arrayBackground[0].split('"');
      let url = arrayUrl[1];

        console.log("перебор arrayUrl");
      for(i = 0; i < arrayUrl; i++) {
          console.log(arrayUrl[i])
      }

      console.log(url);


      $(".popup-img").attr("src", url);

      $("#btn-close-popup").css("display", "block");
      $(".popup-container").css("display", "flex");
    });

});





