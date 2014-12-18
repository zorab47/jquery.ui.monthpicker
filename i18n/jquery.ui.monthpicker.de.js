/* German initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Milian Wolff (mail@milianw.de). */
(function ($) {

$.monthpicker.regional['de'] = {
	closeText: 'Schließen',
	prevText: '&#x3C;Zurück',
	nextText: 'Vor&#x3E;',
	currentText: 'Heute',
	monthNames: ['Januar','Februar','März','April','Mai','Juni',
	'Juli','August','September','Oktober','November','Dezember'],
	monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun',
	'Jul','Aug','Sep','Okt','Nov','Dez'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['de']);

})(jQuery);
