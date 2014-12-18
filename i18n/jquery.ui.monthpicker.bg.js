/* Bulgarian initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Stoyan Kyosev (http://svest.org). */
(function ($) {

$.monthpicker.regional['bg'] = {
	closeText: 'затвори',
	prevText: '&#x3C;назад',
	nextText: 'напред&#x3E;',
	nextBigText: '&#x3E;&#x3E;',
	currentText: 'днес',
	monthNames: ['Януари','Февруари','Март','Април','Май','Юни',
	'Юли','Август','Септември','Октомври','Ноември','Декември'],
	monthNamesShort: ['Яну','Фев','Мар','Апр','Май','Юни',
	'Юли','Авг','Сеп','Окт','Нов','Дек'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['bg']);

})(jQuery);
