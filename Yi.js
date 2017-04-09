/** Yi is Master Yi, very fast. ***/
(function(window,document) {
    var w = window,
        doc = document;
    var MasterYi = function(selector) {
        return new DMasterYioo.prototype.init(selector);
    }
    MasterYi.prototype = {
        constructor : MasterYi,
        length : 0,
        splice: [].splice,
        selector : '',
        init : function(selector) {//dom选择的一些判断

        }
    }
    MasterYi.prototype.init.prototype = MasterYi.prototype;

    MasterYi.ajax = function() { //直接挂载方法  可o.ajax调用
        console.log(this);
    }

	MasterYi.show = function(str){
		console.log(str);
	}
    window.Yi = MasterYi;
})(window,document);
