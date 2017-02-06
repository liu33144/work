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
    },3000);
    var $json = [
        {"src":"../images/tu0.jpg"},{"src":"../images/tu1.jpg"},
        {"src":"../images/tu2.jpg"},{"src":"../images/tu3.jpg"},
        {"src":"../images/tu4.jpg"},{"src":"../images/tu5.jpg"},
        {"src":"../images/tu6.jpg"},{"src":"../images/tu7.jpg"},
        {"src":"../images/tu8.jpg"},{"src":"../images/tu9.jpg"},
        {"src":"../images/tu10.jpg"},{"src":"../images/tu11.jpg"},
        {"src":"../images/tu12.jpg"},{"src":"../images/tu13.jpg"},
        {"src":"../images/tu14.jpg"},{"src":"../images/tu15.jpg"},
        {"src":"../images/tu16.jpg"},{"src":"../images/tu17.jpg"},
        {"src":"../images/tu18.jpg"},{"src":"../images/tu19.jpg"},
        {"src":"../images/tu20.jpg"},{"src":"../images/tu21.jpg"},
        {"src":"../images/tu22.jpg"},{"src":"../images/tu23.jpg"},
        {"src":"../images/tu24.jpg"},{"src":"../images/tu25.jpg"},
        {"src":"../images/tu26.jpg"},{"src":"../images/tu27.jpg"},
        {"src":"../images/tu28.jpg"},{"src":"../images/tu29.jpg"},
        {"src":"../images/tu30.jpg"},{"src":"../images/tu31.jpg"},
        {"src":"../images/tu32.jpg"},{"src":"../images/tu33.jpg"},
        {"src":"../images/tu34.jpg"},{"src":"../images/tu35.jpg"}
    ];
    for(var m = 0;m < $json.length;m++){
        $div = $("<div>");
        $div.css({"float":"left"});
        $tu = $("<img>");
        $span = $("<span>");
        $div.append($tu);
        $div.append($span);
        $tu.css({"display":"block"});
        $tu.attr("src",$json[m].src);
        if(m<6){
            $(".index-main-tu").eq(0).append($div);
        }
        if(m>5 && m<12){
            $(".index-main-tu").eq(1).append($div);
        }
        if(m>11 && m<18){
            $(".index-main-tu").eq(2).append($div);
        }
        if(m>17 && m<24){
            $(".index-main-tu").eq(3).append($div);
        }
        if(m>23 && m<30){
            $(".index-main-tu").eq(4).append($div);
        }
        if(m>29 && m<36){
            $(".index-main-tu").eq(5).append($div);
        }
    }

});
