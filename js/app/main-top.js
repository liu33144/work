$(function () {
    $(".main-nb>li").on("mouseenter", function () {
        console.log($(this).offset().left);
        if($(this).offset().left - $(".main-nb").offset().left + 720 > 1200){
            $(this).children("div").css("left",1200-($(this).offset().left -$(".main-nb").offset().left +720) +"px" )
        }
    });
});
