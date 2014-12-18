/* Kazakh (UTF-8) initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Dmitriy Karasyov (dmitriy.karasyov@gmail.com). */
(function ($) {

$.monthpicker.regional['kk'] = {
	closeText: 'Жабу',
	prevText: '&#x3C;Алдыңғы',
	nextText: 'Келесі&#x3E;',
	currentText: 'Бүгін',
	monthNames: ['Қаңтар','Ақпан','Наурыз','Сәуір','Мамыр','Маусым',
	'Шілде','Тамыз','Қыркүйек','Қазан','Қараша','Желтоқсан'],
	monthNamesShort: ['Қаң','Ақп','Нау','Сәу','Мам','Мау',
	'Шіл','Там','Қыр','Қаз','Қар','Жел'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['kk']);

})(jQuery);
