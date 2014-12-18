/* Afrikaans initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by Renier Pretorius. */
(function ($) {

$.monthpicker.regional['af'] = {
	closeText: 'Selekteer',
	prevText: 'Vorige',
	nextText: 'Volgende',
	currentText: 'Vandag',
	monthNames: ['Januarie','Februarie','Maart','April','Mei','Junie',
	'Julie','Augustus','September','Oktober','November','Desember'],
	monthNamesShort: ['Jan', 'Feb', 'Mrt', 'Apr', 'Mei', 'Jun',
	'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['af']);

})(jQuery);
