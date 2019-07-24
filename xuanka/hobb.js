//获取操作的元素
var oBox = document.getElementById("obox"),
	lilist = oBox.getElementsByTagName("li"),
	divlist = oBox.getElementsByTagName("div");
console.log(oBox);
//封装一个排他的功能函数
function changeTab(index){
	for(var i = 0;i < lilist.length;i++){
		lilist[i].className = divlist[i].className = '';
	}
	lilist[index].className = "active";
	divlist[index].className = "active";
}
//绑定事件点击函数
//解决方案一：自定义属性
// for (var i = 0; i < lilist.length; i++) {
// 	lilist[i].myIndex = i;
// 	lilist[i].onclick = function(){
// 		changeTab(this.myIndex);
// 	}
// }

//解决方案二：闭包
// for(var i = 0;i < lilist.length;i++){
// 	lilist[i].onclick = (function(n){
// 		var i = n;
// 		return function(){
// 			changeTab(i);
// 		}
// 	})(i);
// }
//解决方案三：es6解决
for(let i = 0;i < lilist.length;i++){
	lilist[i].onclick = function(){
		changeTab(i);
	}
}
