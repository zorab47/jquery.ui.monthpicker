/* Tajiki (UTF-8) initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Abdurahmon Saidov (saidovab@gmail.com). */
(function ($) {

$.monthpicker.regional['tj'] = {
	closeText: 'Идома',
	prevText: '&#x3c;Қафо',
	nextText: 'Пеш&#x3e;',
	currentText: 'Имрӯз',
	monthNames: ['Январ','Феврал','Март','Апрел','Май','Июн',
	'Июл','Август','Сентябр','Октябр','Ноябр','Декабр'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
	'Июл','Авг','Сен','Окт','Ноя','Дек'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['tj']);

})(jQuery);
