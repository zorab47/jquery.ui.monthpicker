/* Azerbaijani (UTF-8) initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Jamil Najafov (necefov33@gmail.com). */
(function ($) {

$.monthpicker.regional['az'] = {
	closeText: 'Bağla',
	prevText: '&#x3C;Geri',
	nextText: 'İrəli&#x3E;',
	currentText: 'Bugün',
	monthNames: ['Yanvar','Fevral','Mart','Aprel','May','İyun',
	'İyul','Avqust','Sentyabr','Oktyabr','Noyabr','Dekabr'],
	monthNamesShort: ['Yan','Fev','Mar','Apr','May','İyun',
	'İyul','Avq','Sen','Okt','Noy','Dek'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['az']);

})(jQuery);
