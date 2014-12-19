/* Luxembourgish initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Michel Weimerskirch <michel@weimerskirch.net> */
(function ($) {

$.monthpicker.regional['lb'] = {
	closeText: 'Fäerdeg',
	prevText: 'Zréck',
	nextText: 'Weider',
	currentText: 'Haut',
	monthNames: ['Januar','Februar','Mäerz','Abrëll','Mee','Juni',
	'Juli','August','September','Oktober','November','Dezember'],
	monthNamesShort: ['Jan', 'Feb', 'Mäe', 'Abr', 'Mee', 'Jun',
	'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dez'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['lb']);

})(jQuery);
