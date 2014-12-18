/* Chinese initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Ressol (ressol@gmail.com). */
(function ($) {

$.monthpicker.regional['zh-TW'] = {
	closeText: '關閉',
	prevText: '&#x3C;上月',
	nextText: '下月&#x3E;',
	currentText: '今天',
	monthNames: ['一月','二月','三月','四月','五月','六月',
	'七月','八月','九月','十月','十一月','十二月'],
	monthNamesShort: ['一月','二月','三月','四月','五月','六月',
	'七月','八月','九月','十月','十一月','十二月'],
	dateFormat: 'yy/mm',
	isRTL: false,
	yearSuffix: '年'};
$.monthpicker.setDefaults($.monthpicker.regional['zh-TW']);

})(jQuery);
