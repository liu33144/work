/**
 * Created by Administrator on 2017/2/6 0006.
 */
$(function () {
    $("#index-top").load("main-top.html");
    $("#index-foot").load("main-foot.html");
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
    var $tub = [
        {"src":"../images/tub0.jpg"},{"src":"../images/tub1.jpg"},
        {"src":"../images/tub2.jpg"},{"src":"../images/tub3.jpg"},
        {"src":"../images/tub4.jpg"},{"src":"../images/tub5.jpg"}
    ];
    var $tuz = [
        {"src":"../images/tuz0.png"},{"src":"../images/tuz1.png"},
        {"src":"../images/tuz2.png"},{"src":"../images/tuz3.png"},
        {"src":"../images/tuz4.png"},{"src":"../images/tuz5.png"}
    ];
    var $title = [
        {"src":"../images/title0.jpg"},{"src":"../images/title1.jpg"},
        {"src":"../images/car0.jpg"},
        {"src":"../images/title2.jpg"},{"src":"../images/title3.jpg"}
    ];
    var $show = [
        {"src":"../images/show0.jpg"},{"src":"../images/show1.jpg"},
        {"src":"../images/show2.jpg"},{"src":"../images/show3.jpg"},
        {"src":"../images/show4.jpg"},{"src":"../images/show5.jpg"},
        {"src":"../images/show6.jpg"},{"src":"../images/show7.jpg"},
        {"src":"../images/show8.jpg"},{"src":"../images/show9.jpg"},
        {"src":"../images/show10.jpg"},{"src":"../images/show11.jpg"},
        {"src":"../images/show12.jpg"},{"src":"../images/show13.jpg"},
        {"src":"../images/show14.jpg"},{"src":"../images/show15.jpg"}
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
    for(var n = 0;n < $tub.length;n++){
        $div_tub = $("<div>");
        $span_tub = $("<span>");
        $span_tub.css("background","url("+$tuz[n].src+") no-repeat center center");
        $img_tub = $("<img>");
        $img_tub.attr("src",$tub[n].src);
        $div_tub.append($img_tub);
        $div_tub.append($span_tub);
        $(".index-main-tub").append($div_tub);
    }
    for(var t = 0;t < $title.length;t++){
        $img_t = $("<img>");
        $img_t.attr("src",$title[t].src);
        $(".index-title").eq(t).append($img_t);
    }
    for(var s = 0;s < $show.length;s++){
        $li = $("<li>");
        $span_s = $("<span>");
        $img_s = $("<img>");
        $img_s.attr("src",$show[s].src);
        $li.append($img_s);
        $li.append($span_s);
        $(".index-show-ul").append($li);
    }
});