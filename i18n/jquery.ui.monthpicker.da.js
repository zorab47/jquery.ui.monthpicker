/* Danish initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Jan Christensen ( deletestuff@gmail.com). */
(function ($) {

$.monthpicker.regional['da'] = {
	closeText: 'Luk',
	prevText: '&#x3C;Forrige',
	nextText: 'Næste&#x3E;',
	currentText: 'Idag',
	monthNames: ['Januar','Februar','Marts','April','Maj','Juni',
	'Juli','August','September','Oktober','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
	'Jul','Aug','Sep','Okt','Nov','Dec'],
	dateFormat: 'mm-yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['da']);

})(jQuery);
