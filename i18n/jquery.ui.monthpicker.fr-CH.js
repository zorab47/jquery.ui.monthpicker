/* Swiss-French initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written Martin Voelkle (martin.voelkle@e-tc.ch). */
(function ($) {

$.monthpicker.regional['fr-CH'] = {
	closeText: 'Fermer',
	prevText: '&#x3C;Préc',
	nextText: 'Suiv&#x3E;',
	currentText: 'Courant',
	monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
		'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
	monthNamesShort: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin',
		'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
	dateFormat: 'mm.yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['fr-CH']);

})(jQuery);
