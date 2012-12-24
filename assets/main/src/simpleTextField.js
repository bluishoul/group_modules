define(function(require,exports,module){
	var $ = require('jquery');
	require('./css/simpleTextField.css');
	var tpl = require('./tpl');
	var html = require('./tpl/simpleTextField.tpl');
	var data = {
		default_textarea_value:'simpleTextField',
		defaul_submit_name:'msg'
	};
	var SimpleTextFiled = function(selector,opt){
		selector.html(tpl(html,data));
	};
	module.exports = SimpleTextFiled;
});