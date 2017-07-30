$(function(){
	var pwsInput = $('.data-item>input');
var controlEye = $('.eye');

cancelPwsEye(controlEye,pwsInput);
function cancelPwsEye(ele,input){
	ele.on('click',function(){
		if(ele.hasClass('open-eye')){
			ele.removeClass('open-eye').addClass('close-eye');
			input.attr('type','password');
		}else if(ele.hasClass('close-eye')){
			ele.removeClass('close-eye').addClass('open-eye');
			input.attr('type','text');
		}
	})
}

var _ua = navigator.userAgent.toLowerCase();
var ie8=/msie 8/.test(_ua);
var ie6=/msie 6/.test(_ua)
console.log(_ua);
console.log(ie8);
console.log(ie6);
})