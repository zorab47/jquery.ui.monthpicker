/* Serbian i18n for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Dejan Dimić. */
(function ($) {

$.monthpicker.regional['sr'] = {
	closeText: 'Затвори',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: 'Данас',
	monthNames: ['Јануар','Фебруар','Март','Април','Мај','Јун',
	'Јул','Август','Септембар','Октобар','Новембар','Децембар'],
	monthNamesShort: ['Јан','Феб','Мар','Апр','Мај','Јун',
	'Јул','Авг','Сеп','Окт','Нов','Дец'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['sr']);

})(jQuery);
