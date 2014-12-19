/* Kyrgyz (UTF-8) initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Sergey Kartashov (ebishkek@yandex.ru). */
(function ($) {

$.monthpicker.regional['ky'] = {
	closeText: 'Жабуу',
	prevText: '&#x3c;Мур',
	nextText: 'Кий&#x3e;',
	currentText: 'Бүгүн',
	monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
	'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
	monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
	'Июл','Авг','Сен','Окт','Ноя','Дек'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''
};
$.monthpicker.setDefaults($.monthpicker.regional['ky']);

})(jQuery);
