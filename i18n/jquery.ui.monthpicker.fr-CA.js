/* Canadian-French initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
(function ($) {

$.monthpicker.regional['fr-CA'] = {
	closeText: 'Fermer',
	prevText: 'Précédent',
	nextText: 'Suivant',
	currentText: 'Aujourd\'hui',
	monthNames: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
		'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
	monthNamesShort: ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin',
		'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'],
	dateFormat: 'yy-mm',
	isRTL: false,
	yearSuffix: ''
};
$.monthpicker.setDefaults($.monthpicker.regional['fr-CA']);

})(jQuery);
