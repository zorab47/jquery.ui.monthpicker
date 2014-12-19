/* Croatian i18n for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Vjekoslav Nesek. */
(function ($) {

$.monthpicker.regional['hr'] = {
	closeText: 'Zatvori',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: 'Danas',
	monthNames: ['Siječanj','Veljača','Ožujak','Travanj','Svibanj','Lipanj',
	'Srpanj','Kolovoz','Rujan','Listopad','Studeni','Prosinac'],
	monthNamesShort: ['Sij','Velj','Ožu','Tra','Svi','Lip',
	'Srp','Kol','Ruj','Lis','Stu','Pro'],
	dateFormat: 'mm.yy.',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['hr']);

})(jQuery);
