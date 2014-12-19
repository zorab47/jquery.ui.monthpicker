/* Romansh initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Yvonne Gienal (yvonne.gienal@educa.ch). */
(function ($) {

$.monthpicker.regional['rm'] = {
	closeText: 'Serrar',
	prevText: '&#x3C;Suandant',
	nextText: 'Precedent&#x3E;',
	currentText: 'Actual',
	monthNames: ['Schaner','Favrer','Mars','Avrigl','Matg','Zercladur', 'Fanadur','Avust','Settember','October','November','December'],
	monthNamesShort: ['Scha','Fev','Mar','Avr','Matg','Zer', 'Fan','Avu','Sett','Oct','Nov','Dec'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['rm']);

})(jQuery);
