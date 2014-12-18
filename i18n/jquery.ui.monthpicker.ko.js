/* Korean initialisation for the jQuery month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by DaeKwon Kang (ncrash.dk@gmail.com), Edited by Genie. */
(function ($) {

$.monthpicker.regional['ko'] = {
	closeText: '닫기',
	prevText: '이전달',
	nextText: '다음달',
	currentText: '오늘',
	monthNames: ['1월','2월','3월','4월','5월','6월',
	'7월','8월','9월','10월','11월','12월'],
	monthNamesShort: ['1월','2월','3월','4월','5월','6월',
	'7월','8월','9월','10월','11월','12월'],
	dateFormat: 'yy-mm',
	isRTL: false,
	yearSuffix: '년'};
$.monthpicker.setDefaults($.monthpicker.regional['ko']);

})(jQuery);
