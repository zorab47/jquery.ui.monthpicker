/* Dutch (Belgium) initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* David De Sloovere @DavidDeSloovere */
(function ($) {

$.monthpicker.regional['nl-BE'] = {
	closeText: 'Sluiten',
	prevText: '←',
	nextText: '→',
	currentText: 'Vandaag',
	monthNames: ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
	'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
	monthNamesShort: ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun',
	'jul', 'aug', 'sep', 'okt', 'nov', 'dec'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['nl-BE']);

})(jQuery);
