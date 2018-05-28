$(document).ready(function () {
    $("*").css({"margin":0,"padding": 0});
    var header = $('.header').height("30px").width("100%");
    header.css("background","silver");

    var ul = $('ul');
    var lis = $('li');

    ul.width("fit-content")
        .css("background","blue")
        .css("margin","0 auto");
    lis.css("display","inline-block")
        .css("background","red")
        .css("margin-right", "20px");
    lis.css("font-size", function () {
        if ($(this).text().includes("3")){
            /*console.log($(this).html('<h1>assd</h1>'));*/
            return "40px";
        }
    })

    header.height("auto");
    lis.filter(":even").css("background", "orange");

    var uh = $(".underHeader")
        .css("border", "1px solid black")
        .css("height","200px");
    header.click(function () {
        /*uh.hide(300);*/
        uh.toggle(1000);
    });

    uh.click(function () {
        header.toggle(500);
    })
    uh.css("overflow","hidden");
    var box = $(".box-1");
    $('.slider').width(box.width() * 3).height("100%");
    $('.slider>div').width(uh.width())
        .css("float","left")
        .height("100%")
        .css("background-image", "url(tom.jpg)");

    //animation background
    $(".box-1").animate({marginLeft: -box.width()},2000, function () {
        $(".box-2").animate({marginLeft: -box.width()}), 2000 , function () {
            
        }
    })

    var boxNumber = 1;
    setInterval(function () {
        if (boxNumber <= 2){
            $(".box"+ boxNumber).animate({margineLeft: -box.width()}, 5000, function () {
                boxNumber++;
            })
        }
    }, 5000)
})


















/*$("*").css("margin",0).css("padding",0);*/
/*    var jsO = {a:1, b:"two",c:{}};
    var jsonO = JSON.stringify(jsO);
    console.log(jsonO);*/
