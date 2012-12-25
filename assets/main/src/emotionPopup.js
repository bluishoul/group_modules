define(function(require,exports,module){
	var sum = 134;
	var emotions = '';
	for(var i=0;i<sum;i++){
		var pos = 24*i;
		emotions += '<a href="javascript:void(0);" class="stf_emotion_popup_img" style="background-position:-'+pos+'px 0px;"></a>';
	}
	module.exports = emotions;
});