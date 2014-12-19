/* Persian (Farsi) Translation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Javad Mowlanezhad -- jmowla@gmail.com */
/* Jalali calendar should supported soon! (Its implemented but I have to test it) */
(function ($) {

$.monthpicker.regional['fa'] = {
	closeText: 'بستن',
	prevText: '&#x3C;قبلی',
	nextText: 'بعدی&#x3E;',
	currentText: 'امروز',
	monthNames: [
		'ژانویه',
		'فوریه',
		'مارس',
		'آوریل',
		'مه',
		'ژوئن',
		'ژوئیه',
		'اوت',
		'سپتامبر',
		'اکتبر',
		'نوامبر',
		'دسامبر'
	],
	monthNamesShort: ['1','2','3','4','5','6','7','8','9','10','11','12'],
	dateFormat: 'yy/mm',
	isRTL: true,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['fa']);

})(jQuery);
