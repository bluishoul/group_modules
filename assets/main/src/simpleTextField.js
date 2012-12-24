define(function(require,exports,module){
	var $ = require('jquery');
	require('./css/simpleTextField.css');
	var tpl = require('./tpl');
	var html = require('./tpl/simpleTextField.tpl');
	var data = {
		defalt_textarea_value:'simpleTextField'
	};
	var SimpleTextFiled = function(selector,opt){
		selector.html(tpl(html,data));
	};
	module.exports = SimpleTextFiled;
});