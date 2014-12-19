/* Esperanto initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Olivier M. (olivierweb@ifrance.com). */
(function ($) {

$.monthpicker.regional['eo'] = {
	closeText: 'Fermi',
	prevText: '&#x3C;Anta',
	nextText: 'Sekv&#x3E;',
	currentText: 'Nuna',
	monthNames: ['Januaro','Februaro','Marto','Aprilo','Majo','Junio',
	'Julio','Aŭgusto','Septembro','Oktobro','Novembro','Decembro'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Maj','Jun',
	'Jul','Aŭg','Sep','Okt','Nov','Dec'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['eo']);

})(jQuery);
