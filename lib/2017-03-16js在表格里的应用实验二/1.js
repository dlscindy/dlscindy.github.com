/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-03-16 13:44:33
 * @version $Id$
 */


/*querySelector("#tb1").addEventListener"click"{

}*/
/*var a=document.getElementById("tb1.td1");
var b=document.getElementById("tb1");
window.onload=function(){
a.onclick=function(){b.bgcolor="red"};

}*/
//document.querySelector('tb1.d11').addEventListener('onclick',function(){alert('a');})

function myFunction11() {
    //console.log(document.getElementById("tb1").innerHTML);
    document.getElementById("tb1").style.backgroundColor = "pink";
    //console.log(event.target.innerHTML);
}


//var tdlist=document.querySelector('.td')
//for 

function myFunction12() {
    var myDate = new Date();

    var tb1 = document.getElementById("tb1");
    var td = tb1.rows[0].cells[1];
    td.innerHTML = myDate.getFullYear() + '-' + (myDate.getMonth() + 1) + '-' + myDate.getDate();

}

function myFunction21() {
    var tb1 = document.getElementById("tb1");

    var row = tb1.insertRow(2);
    row.innerHTML = "new row";
}

function myFunction22() {
    var tb1 = document.getElementById("tb1");
    tb1.deleteRow(1);

}

function myFunction31(event) {
    x = event.clientX;
    y = event.clientY;
    alert("X 坐标: " + x + ", Y 坐标: " + y);
}

function myFunction32() {

    window.open("https://www.taobao.com/");
}
