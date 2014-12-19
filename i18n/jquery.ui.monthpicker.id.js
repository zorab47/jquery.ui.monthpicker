/* Indonesian initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Deden Fathurahman (dedenf@gmail.com). */
(function ($) {

$.monthpicker.regional['id'] = {
	closeText: 'Tutup',
	prevText: '&#x3C;mundur',
	nextText: 'maju&#x3E;',
	currentText: 'hari ini',
	monthNames: ['Januari','Februari','Maret','April','Mei','Juni',
	'Juli','Agustus','September','Oktober','Nopember','Desember'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Mei','Jun',
	'Jul','Agus','Sep','Okt','Nop','Des'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['id']);

})(jQuery);
