/* Faroese initialisation for the jQuery UI month picker plugin */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Sverri Mohr Olsen, sverrimo@gmail.com */
(function ($) {

$.monthpicker.regional['fo'] = {
	closeText: 'Lat aftur',
	prevText: '&#x3C;Fyrra',
	nextText: 'Næsta&#x3E;',
	currentText: 'Í dag',
	monthNames: ['Januar','Februar','Mars','Apríl','Mei','Juni',
	'Juli','August','September','Oktober','November','Desember'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun',
	'Jul','Aug','Sep','Okt','Nov','Des'],
	dateFormat: 'mm-yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['fo']);

})(jQuery);
