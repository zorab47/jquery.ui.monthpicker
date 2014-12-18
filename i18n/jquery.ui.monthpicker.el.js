/* Greek (el) initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Alex Cicovic (http://www.alexcicovic.com) */
(function ($) {

$.monthpicker.regional['el'] = {
	closeText: 'Κλείσιμο',
	prevText: 'Προηγούμενος',
	nextText: 'Επόμενος',
	currentText: 'Σήμερα',
	monthNames: ['Ιανουάριος','Φεβρουάριος','Μάρτιος','Απρίλιος','Μάιος','Ιούνιος',
	'Ιούλιος','Αύγουστος','Σεπτέμβριος','Οκτώβριος','Νοέμβριος','Δεκέμβριος'],
	monthNamesShort: ['Ιαν','Φεβ','Μαρ','Απρ','Μαι','Ιουν',
	'Ιουλ','Αυγ','Σεπ','Οκτ','Νοε','Δεκ'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['el']);

})(jQuery);
