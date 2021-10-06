//拦截安卓回退按钮
history.pushState(null, null, location.href);
window.addEventListener('popstate', function(event) {
    history.pushState(null, null, location.href );
    //此处加入回退时你要执行的代码
	//window.location.href="about:blank";
});


//变换背景颜色
/**
 * 产生随机整数，包含下限值，包括上限值
 * @param {Number} lower 下限
 * @param {Number} upper 上限
 * @return {Number} 返回在下限到上限之间的一个随机整数
 */
function random(lower, upper) {
	return Math.floor(Math.random() * (upper - lower+1)) + lower;
}
//随机设置背景色
function setBGC(){
	var colorArr = new Array("#4395D1","#00A99D","#FBAF5D","#84871C","#9E6B52","#A186BE");
	var i = random(0,5);
	document.getElementById("imgBg").style.background = colorArr[i];
}
setInterval(setBGC,300); 


//2分钟结束
function closePass(){
	document.getElementById("bodyDiv").style.display = 'none';
	document.title = '通行证已失效';
	history.pushState(null, null, location.href);
	window.addEventListener('popstate', function(event) {
		history.pushState(null, null, location.href );
		//此处加入回退时你要执行的代码
		//window.location.href="about:blank";
	});
}
var today = new Date();
var Hours=today.getHours();
var Minutes=today.getMinutes();
var Month=today.getMonth()+1
var Seconds=today.getSeconds();
if(Hours<10){
	Hours="0"+Hours
}
if(Minutes<10){
	Minutes="0"+Minutes
}
if(Seconds<10){
	Seconds="0"+Seconds
}
document.getElementById("change").innerHTML='时间：'+today.getFullYear()+"/"+Month+"/"+today.getDate()+" "+Hours+":"+Minutes+":"+Seconds



