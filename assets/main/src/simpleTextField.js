define(function(require,exports,module){

	require('./css/simpleTextField.css');
	var $ = require('./jquery.form');
	var g_utils = require("./utils");
	var tpl = require('./tpl');
	var html = require('./tpl/simpleTextField.tpl');
	g_utils.import
	var buildEmotions = function(){
		var sum = 134;
		var emotions = '';
		for(var i=0;i<sum;i++){
			var pos = 24*i;
			emotions += '<a href="javascript:void(0);" class="stf_emotion_popup_img" style="background-position:-'+pos+'px 0px;"></a>';
		}
		return emotions;
	};

	var data = {
		default_textarea_value:'simpleTextField',
		defaul_submit_name:'msg',
		emotion_popups:buildEmotions(),
		image_insert_action:'',
		video_insert_action:'',
		default_submit_name:'msg',
		user_id:''
	};

	var selector = {};

	var SimpleTextField = function(sel,opt){
		data = $.extend(data,opt);
		selector = sel;
		var ht = tpl(html,data);
		selector.append($(ht));
		g_utils.binder.call(this);
		form_handler();
	};

	var form_handler = function(){
		//插入图片
		$("#stf_popups_image_form").ajaxForm({
			dataType : 'json',
			success : function(json) {
				if (json.msg) {
					alert(json.msg);
				} else if (json.thumb) {

				}
			}
		});
		//插入视频
		$("#stf_popups_video_form").ajaxForm({
			dataType : 'json',
			success : function(json) {
				if (json.msg) {
					alert(json.msg);
				} else if (json.swf) {

				}
			}
		});
	};

	SimpleTextField.prototype.Events = {
		'click->.stf_resources li':'show_stf_popups',
		'click->[document]':'hide_popups_wrapper',
		'change->input[id^="ti_img_source"]':function(){
			$("#t_image_upload").toggle();
			$("#t_image_network").toggle();
		}
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
		g_utils.notClickOn(event,'.stf_popup_wrapper,.stf_popup_wrapper *,.stf_resources li a,.stf_textarea',function(){
			$('.stf_popup_wrapper').hide();
		});
	};

	module.exports = SimpleTextField;
});