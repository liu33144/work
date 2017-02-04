var app = angular.module("myApp",[]);
app.controller("myCtrl1", function ($scope) {
    $scope.image="../images/w1.jpg";
    $scope.uname="Longines";
    $scope.msg="男士军旗系列日期显示自动机械表 L47744726";
    $scope.size="颜色 : 银色 尺码 : 36mm";
    $scope.price="7790";
    $scope.num=1;
    $scope.$watch("num",function () {
        $scope.money =  $scope.num * $scope.price
    },true);
    $(".s-jian").on("click", function () {
        console.log($(".s-num").val());
        var s = $(".s-num").val();
        s--;
        $(".s-num").val(s);
        $scope.num = s;
    });
    $(".s-add").on("click", function () {
        console.log($(".s-num").val());
        var s = $(".s-num").val();
        s++;
        $(".s-num").val(s);
        $scope.num = s;
    });
});
