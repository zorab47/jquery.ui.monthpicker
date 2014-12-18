/* Macedonian i18n for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Stojce Slavkovski. */
(function ($) {

$.monthpicker.regional['mk'] = {
	closeText: 'Затвори',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: 'Денес',
	monthNames: ['Јануари','Февруари','Март','Април','Мај','Јуни',
	'Јули','Август','Септември','Октомври','Ноември','Декември'],
	monthNamesShort: ['Јан','Фев','Мар','Апр','Мај','Јун',
	'Јул','Авг','Сеп','Окт','Ное','Дек'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['mk']);

})(jQuery);
