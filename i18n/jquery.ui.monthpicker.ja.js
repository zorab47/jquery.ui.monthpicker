/* Japanese initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Kentaro SATO (kentaro@ranvis.com). */
(function ($) {

$.monthpicker.regional['ja'] = {
	closeText: '閉じる',
	prevText: '&#x3C;前',
	nextText: '次&#x3E;',
	currentText: '今日',
	monthNames: ['1月','2月','3月','4月','5月','6月',
	'7月','8月','9月','10月','11月','12月'],
	monthNamesShort: ['1月','2月','3月','4月','5月','6月',
	'7月','8月','9月','10月','11月','12月'],
	dateFormat: 'yy/mm',
	isRTL: false,
	yearSuffix: '年'};
$.monthpicker.setDefaults($.monthpicker.regional['ja']);

})(jQuery);
