/*var ext = $extend({a:1,b:2},{c:3,b:6});
console.log(ext);*/

(function ($) {
    var defOptions = {color:'aqua'};
    var options;
    $.fn.myPlugin = function (params) {
        options = $.extend(defOptions,options,params);
        $(this).click(function () {
            $(this).css('color',options.color);
        })
        return this;
    }
}(jQuery));

$('p:first').myPlugin({color:"#80a2ff"});

$("[href = '#section1']").click(function () {
    var top = $('#section1').offset().top;
    console.log(top);
    $('html,body').animate({scrollTop:top},1000);
})
