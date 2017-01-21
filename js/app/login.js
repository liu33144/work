/**
 * Created by LIU on 2017/1/21.
 */
$(function () {
    //短信登陆/密码登陆选择
   $(".l-chose>li>a").on("click", function () {
       $(this).css("border-color","#464646");
       $(this).parent().siblings().children().css("border-color","#f7f7f9")
   })

    //登陆账号密码效果
    $(".l-exchange>input").focus(function () {
        $(this).parent().children("span").css("top","-20px");
    });
    $(".l-exchange>input").blur(function () {
        $(this).parent().children("span").css("top","1px");
    });

    //复选框特效
    var flag = true;
    $(".l-check").on("click", function () {
        if(flag){
            $(this).css("background-position","-180px 0");
        }else {
            $(this).css("background-position","-160px 0");
        }
        flag = !flag;
    });
    $(".l-check").on("mouseenter", function () {
        $(".l-tsmsg").css("display","block");
    });
    $(".l-check").on("mouseleave", function () {
        $(".l-tsmsg").css("display","none");
    })
});