//header
$(window).scroll(function () {
    var scrll;

    if (window.innerWidth >= 768) {
        scroll = $(window).scrollTop();

        if (scroll >= 2) {
            $("header").addClass("sticky");
            $(".btn-up-mobile").css("display", "flex")
        } else {
            $("header").removeClass("sticky");
            $(".btn-up-mobile").css("display", "none")
        }

    }
    else {
        if (window.innerWidth >= 0) {
            scroll = $(window).scrollTop();

            if (scroll >= 2) {
                $(".btn-up-mobile").css("display", "flex")
            } else {
                $(".btn-up-mobile").css("display", "none")
            }
        }
    }
});
//burger
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


//product
$(document).ready(function () {

    function closePopup () {
        $(".popup-container").css("display", "none");
        $("#btn-arrow-right-popup").css("display", "block");
        $("#btn-arrow-left-popup").css("display", "none");
        $(".btn-up-mobile").css("display", "flex");
        $("body").css("overflow", "auto");
        num = 1;
    }

   $("#btn-close-popup").click(function () {
      closePopup()
   });

   $(".popup-background").click(function () {
       closePopup()
   });

    let url;
    $(".item-product").click(function () {
        $(".btn-up-mobile").css("display", "none");
        $("body").css("overflow", "hidden");
      let img = $(this).find(".item-product-img"); // Получить объект картинку

      let imgClass = $(img).attr("class");
      let arrayImgClass = imgClass.split(" ");
      let background = $("."+arrayImgClass[1]).css("background-image");
      let arrayBackground = background.split(" ");
      let arrayUrl = arrayBackground[0].split('"');
      url = arrayUrl[1];

      if (checkContImages(url) === 1) {
          $("#btn-arrow-right-popup").css("display", "none");
      }

      $(".popup-img").attr("src", url);
      $("#btn-close-popup").css("display", "block");
      $(".popup-container").css("display", "flex");
    });


    $("#btn-arrow-right-popup").click(function () {
        $(".popup-img").attr("src", slider(url, "+", checkContImages(url)));
    });

    $("#btn-arrow-left-popup").click(function () {
        $(".popup-img").attr("src", slider(url, "-", checkContImages(url)));

    })

});

let num = 1;
function slider(url, direction, cont) {

    switch (direction) {
        case "+":
            num++;
            break;
        case "-":
            num--;
            break;
    }

    if (num > 1 ) {
        $("#btn-arrow-left-popup").css("display", "block")
    }

    else {
        $("#btn-arrow-left-popup").css("display", "none")
    }

    if (num < cont) {
        $("#btn-arrow-right-popup").css("display", "block")
    }

    else {
        $("#btn-arrow-right-popup").css("display", "none")
    }

    return imageSrcRename(url, num);
}

function checkContImages(url) {

    let arrayDir = url.split("/");
    let nameDir = arrayDir[5];

    switch (nameDir) {
        case "autoklav":
            return 3;

        case "autotuning":
            return 6;

        case "pools":
            return 8;

        case "biofireplaces":
            return 5;

        case "booklets-etc":
            return 1;

        case "goal":
            return 6;

        case "capacities":
            return 1;

        case "stairs":
            return 7;

        case "hatches":
            return 4;

        case "barbecues":
            return 1;

        case "furniture":
            return 18;

        case "window-railing":
            return 4;

        case "railing":
            return 10;
    }
}

function imageSrcRename(url, num) {
    let arrayUrl = url.split("/");

    arrayUrl[arrayUrl.length - 1] = num + ".webp";
    let result = arrayUrl.toString();
    for (i = 0; i < arrayUrl.length; i++) {
        result = result.replace(",", "/");
    }
    return result;

}



