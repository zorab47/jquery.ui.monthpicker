/* Welsh/UK initialisation for the jQuery UI month picker plugin. */
/* Based on the initialisation for the jQuery UI date picker plugin. */
/* Written by William Griffiths. */
(function ($) {

$.monthpicker.regional['cy-GB'] = {
	closeText: 'Done',
	prevText: 'Prev',
	nextText: 'Next',
	currentText: 'Today',
	monthNames: ['Ionawr','Chwefror','Mawrth','Ebrill','Mai','Mehefin',
	'Gorffennaf','Awst','Medi','Hydref','Tachwedd','Rhagfyr'],
	monthNamesShort: ['Ion', 'Chw', 'Maw', 'Ebr', 'Mai', 'Meh',
	'Gor', 'Aws', 'Med', 'Hyd', 'Tac', 'Rha'],
	dateFormat: 'mm/yy',
	isRTL: false,
	yearSuffix: ''};
$.monthpicker.setDefaults($.monthpicker.regional['cy-GB']);

})(jQuery);
