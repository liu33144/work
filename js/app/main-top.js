$(function () {
    $(".main-nb>li").on("mouseenter", function () {
        console.log($(this).offset().left);
        if($(this).offset().left - $(".main-nb").offset().left + 720 > 1200){
            $(this).children("div").css("left",1200-($(this).offset().left -$(".main-nb").offset().left +720) +"px" )
        }
    });
    $(window).scroll(function () {
        if($(this).scrollTop() > 134){
            $(".main-nav").css({"position":"fixed","top":-5+"px","width":"100%","left":0});
            $(".main-big-nav").css({"position":"fixed","top":43+"px"})
        }else {
            $(".main-nav").css({"position":"relative","top":0,"left":0});
            $(".main-big-nav").css({"position":"relative","top":0,"left":0})
        }
    });

});
