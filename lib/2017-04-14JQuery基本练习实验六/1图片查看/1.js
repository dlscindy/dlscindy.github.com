/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-14 08:03:02
 * @version $Id$
 */

$(init)


function init() {
   $(".mask").hide();
    $("body").on('click', 'li', showimg);
    $(".mask").on('click',function(){$(".mask").hide();})
    //$(".b-box").on('click',function(){$(".b-box"),hide();})
}
function showimg(e) {
    $(".mask").fadeToggle();
     var url=$(e.target).attr("src");
  $(".b-box img").attr("src",url);

}
