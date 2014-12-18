/* Polish initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Jacek Wysocki (jacek.wysocki@gmail.com). */
(function ($) {

$.monthpicker.regional['pl'] = {
	closeText: 'Zamknij',
	prevText: '&#x3C;Poprzedni',
	nextText: 'Następny&#x3E;',
	currentText: 'Dziś',
	monthNames: ['Styczeń','Luty','Marzec','Kwiecień','Maj','Czerwiec',
	'Lipiec','Sierpień','Wrzesień','Październik','Listopad','Grudzień'],
	monthNamesShort: ['Sty','Lu','Mar','Kw','Maj','Cze',
	'Lip','Sie','Wrz','Pa','Lis','Gru'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['pl']);

})(jQuery);
