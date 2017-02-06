/**
 * Created by Administrator on 2017/2/6 0006.
 */
$(function () {
    $("#index-top").load("main-top.html");
    var json = [{"src":"../images/a0.jpg"},{"src":"../images/a1.jpg"}];
    for(var i = 0;i < json.length;i++){
        var $li = $("<li>");
        $(".index-ban").append($li);
        var $img = $("<img>");
        $img.attr("src",json[i].src);
        $($li).append($img);
    }
    var index = 1;
    var x = 1;
    $(".index-ban").append($(".index-ban li").eq(0).clone());
    var time = setInterval(function () {
        //console.log($(".index-ban").offset().left);
        if(x == 3){
            x = 1;
            $(".index-ban").css("left",0);
        }
        $(".index-ban").animate({"left": x * (- 1200) +"px"},1000);
        x ++;
    },3000)

});
