define(function(require,exports,module){

	require('./css/simpleTextField.css');
	var $ = require('jquery');
	var g_utils = require("./utils");
	var tpl = require('./tpl');
	var html = require('./tpl/simpleTextField.tpl');
	var emotion_popups = require('emotionPopup');

	var data = {
		default_textarea_value:'simpleTextField',
		defaul_submit_name:'msg',
		emotion_popups:emotion_popups
	};

	var selector = {};

	var SimpleTextField = function(sel,opt){
		selector = sel;
		selector.html(tpl(html,data));
		g_utils.binder.call(this);
	};

	SimpleTextField.prototype.Events = {
		'click->.stf_resources li':'show_stf_popups',
		'click->[document]':'hide_popups_wrapper'
	};

	SimpleTextField.prototype.show_stf_popups = function(cur,event){
		var idx = $(this).index();
		if(idx==0)
			return;
		else
			idx = idx - 1;
		var popup = $(".stf_popups li").hide().eq(idx);
		popup.show();
		$(".stf_popup_wrapper").show();
	};

	SimpleTextField.prototype.hide_popups_wrapper = function(cur,event){
		g_utils.notClickOn(event,'.stf_resources li a,.stf_textarea',function(){
			$('.stf_popup_wrapper').hide();
		});
	};

	module.exports = SimpleTextField;
});

define('emotionPopup',function(require,exports,module){
	var sum = 134;
	var emotions = '';
	for(var i=0;i<sum;i++){
		var pos = 24*i;
		emotions += '<a href="javascript:void(0);" class="stf_emotion_popup_img" style="background-position:-'+pos+'px 0px;"></a>';
	}
	module.exports = emotions;
});