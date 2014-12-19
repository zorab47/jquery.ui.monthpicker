/* Icelandic initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Haukur H. Thorsson (haukur@eskill.is). */
(function ($) {

$.monthpicker.regional['is'] = {
	closeText: 'Loka',
	prevText: '&#x3C; Fyrri',
	nextText: 'Næsti &#x3E;',
	currentText: 'Í dag',
	monthNames: ['Janúar','Febrúar','Mars','Apríl','Maí','Júní',
	'Júlí','Ágúst','September','Október','Nóvember','Desember'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maí','Jún',
	'Júl','Ágú','Sep','Okt','Nóv','Des'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['is']);

})(jQuery);
