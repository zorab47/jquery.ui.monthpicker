/* Serbian i18n for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Dejan Dimić. */
(function ($) {

$.monthpicker.regional['sr-SR'] = {
	closeText: 'Zatvori',
	prevText: '&#x3C;',
	nextText: '&#x3E;',
	currentText: 'Danas',
	monthNames: ['Januar','Februar','Mart','April','Maj','Jun',
	'Jul','Avgust','Septembar','Oktobar','Novembar','Decembar'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
	'Jul','Avg','Sep','Okt','Nov','Dec'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['sr-SR']);

})(jQuery);
