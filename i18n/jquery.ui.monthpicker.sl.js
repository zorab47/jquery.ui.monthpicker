/* Slovenian initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Jaka Jancar (jaka@kubje.org). */
/* c = č, s = š z = ž C = Č S = Š Z = Ž */
(function ($) {

$.monthpicker.regional['sl'] = {
	closeText: 'Zapri',
	prevText: '&#x3C;Prejšnji',
	nextText: 'Naslednji&#x3E;',
	currentText: 'Trenutni',
	monthNames: ['Januar','Februar','Marec','April','Maj','Junij',
	'Julij','Avgust','September','Oktober','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
	'Jul','Avg','Sep','Okt','Nov','Dec'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['sl']);

})(jQuery);
