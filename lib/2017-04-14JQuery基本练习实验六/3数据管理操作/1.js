/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-04-14 08:03:02
 * @version $Id$
 */
var num=1;
var length=1;
var i;
$(init)
function init() {
    $("body").on('click', '.addbutton', function(event) {
            var item = $(".item");
          ++num;
            $(".cont").append("<div class='item'><div class='itembefore'></div><div class='itemafter'>Delete</div></div>");
           
          ++length;
for(i=0;i<length;++i){

$(".itembefore").eq(i).text(i+1);

 }
            });




  $("body").on('click', '.itemafter', function(event) {
   var index = $(this).parent().index();
   --length;
   --num;
  //alert(index+" "+length);

$(this).parent().remove();
  
for(i=0;i<length;++i){

$(".itembefore").eq(i).text(i+1);

 }
  



  });
 

 




 }
