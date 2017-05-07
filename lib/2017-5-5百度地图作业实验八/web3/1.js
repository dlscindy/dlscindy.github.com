/**
 * 
 * @authors Your Name (you@example.org)
 * @date    2017-05-04 14:13:29
 * @version $Id$
 */

var p;
var map = new BMap.Map("myMap");
var point = new BMap.Point(120.016789, 30.294284);
var marker = new BMap.Marker(point); // 创建标注    
map.addOverlay(marker); //添加覆盖物*/


marker.enableDragging(); //开启拖拽功能
marker.addEventListener("dragend", function(e) {

    alert("当前位置：" + e.point.lng + ", " + e.point.lat);
});

var local = new BMap.LocalSearch(map, {
    renderOptions: {

        map: map,
        autoViewport: true,


    }
});


local.searchNearby("宾馆", point);

map.centerAndZoom(new BMap.Point(120.016789, 30.294284), 14);
/*map.centerAndZoom(new BMap.Point(116.404, 39.915), 14);*/
var transit = new BMap.TransitRoute(map, {
    renderOptions: {
        map: map,
        panel: "result"
    }
});


function search(e){

transit.search(point, $("#HZNU-to-Hotel-transitEnd").val());

}

